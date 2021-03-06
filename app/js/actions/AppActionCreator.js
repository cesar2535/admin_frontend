require('whatwg-fetch');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var shortid = require('shortid');
var chatroomUrl = 'http://ec2-52-69-53-3.ap-northeast-1.compute.amazonaws.com:8080';
var nasUrl = 'http://192.168.0.30:3000';
/**
 * 這是一個 singleton 物件
 */
var AppActionCreators = {

  /**
   * app 啟動後，從 server 取回一包初始資料
   * 這支目前沒用到
   */
  load: function() {
    // AppDispatcher.handleServerAction({
    //     actionType: AppConstants.TODO_READ,
    //     items: [] // 送一包假資料進去
    // });
  },
  // Load video files from server
  loadFiles: function () {
    fetch( nasUrl + '/streaming/files', {
      method: 'get'
    }).then(function (res) {
      console.info('Action: Load Files');
      console.log(res);
      res.json().then(function (data) {
        console.log(data);

        var item;
        for (item of data.data) {
          item.uid = item.fileName;
        }
        
        AppDispatcher.handleServerAction({
          actionType: AppConstants.FILES_LOAD,
          items: data.data
        });
      });
    });
  },
  selectFile: function (item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.FILE_SELECT,
      item: item
    });
  },
  broadcastVideo: function (item) {
    var file = {
      fileName: item.fileName
    };
    console.log(file);
    fetch( nasUrl + '/streaming/onair', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(file)
    }).then(function (res) {
      res.json().then(function (data) {
        console.log(data);
        AppDispatcher.handleServerAction({
          actionType: AppConstants.VIDEO_BROADCAST,
          item: data.data[0]
        });
      });
    });
  },
  stopBroadcast: function () {
    fetch( nasUrl + '/streaming/stop', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (body) {
      console.log(body);
      AppDispatcher.handleServerAction({
        actionType: AppConstants.BROADCAST_STOP,
        item: body.data
      });
    })
  },
  createChannel: function (item) {
    fetch( chatroomUrl + '/channel/create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (res) {
      console.info('Action: Create Channel');
      console.log(res);
      AppDispatcher.handleServerAction({
        actionType: AppConstants.CHANNEL_CREATE,
        item: item
      });
    });
  },
  destroyChannel: function (item) {
    fetch( chatroomUrl + '/channel/destory', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (res) {
      console.info('Action: Destroy Channel');
      console.log(res);
      AppDispatcher.handleServerAction({
        actionType: AppConstants.CHANNEL_DESTROY,
        item: item
      });
    });
  },
  sendMessage: function (item) {
    var tid = "m_" + shortid.generate();
    item.tid = tid;
    item.uid = shortid.generate();
    // console.log(item);
    // AppDispatcher.handleViewAction({
    //   actionType: AppConstants.MESSAGE_ADD,
    //   item: item
    // });
    AppDispatcher.handleServerAction({
      actionType: AppConstants.MESSAGE_SEND,
      item: item
    });
  },
  addMessage: function (item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MESSAGE_ADD,
      item: item
    });
  },
  // dummy
  noop: function() {}
};

module.exports = AppActionCreators;
