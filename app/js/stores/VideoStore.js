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