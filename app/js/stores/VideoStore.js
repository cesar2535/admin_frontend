var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('event').EventEmitter;

var arrVideos = [];

window.arrVideos = arrVideos;

var selectItem = null; 

var VideoStore = {};

Object.assign( VideoStore, EventEmitter.prototype, {
  getAll: function () {
    return {
      arrVideos: arrVideos,
      selectItem: selectItem,
      screenSize: screenSize
    };
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