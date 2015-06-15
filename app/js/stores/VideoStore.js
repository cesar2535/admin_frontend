var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('events').EventEmitter;

var arrVideos = [];

window.arrVideos = arrVideos;

var selectedItem = {}; 

var VideoStore = {};

Object.assign( VideoStore, EventEmitter.prototype, {
  getAll: function () {
    return {
      arrVideos: arrVideos,
      selectedItem: selectedItem,
      screenSize: screenSize
    };
  }
});

VideoStore.dispatchToken = AppDispatcher.register( function videoEventHandler(event) {
  var action = event.action;
  switch (action.actionType) {
    case AppConstants.FILES_LOAD:
      console.info('VideoStore: FILES_LOAD');
      console.log(action.items);
      arrVideos = arrVideos.concat( action.items );
      VideoStore.emit(AppConstants.CHANGE_EVENT);
      break;
    case AppConstants.FILE_SELECT:
      console.info('VideoStore: FILE_SELECT', action.item.fileName);
      console.log(action.item);
      if (selectedItem != action.item) {
        selectedItem = action.item;
        VideoStore.emit( AppConstants.CHANGE_EVENT );
      }
      break;
  }
});

// 為了 RWD 偷放的 screenSize 判斷
window.addEventListener('resize', handleResize );
handleResize();
var idResize;
var screenSize;

function handleResize(){

    clearTimeout( idResize );

    idResize = setTimeout(function(){

        var body = document.body;
        var size;

        if(body.scrollWidth > 1024){
            size = 'desktop';
        }else if(body.scrollWidth > 480){
            size = 'tablet';
        }else{
            size = 'phone';
        }

        console.log( 'resize: ', body.scrollWidth, body.scrollHeight, ' >size: ', size );

        screenSize = size;

    }.bind(this), 0)

}

module.exports = VideoStore;