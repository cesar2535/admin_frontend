var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var shortid = require('shortid');
var chatroomUrl = 'http://localhost:8080';
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
    io(chatroomUrl + '/test').emit("message", item);
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
