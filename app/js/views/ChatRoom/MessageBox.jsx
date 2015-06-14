var ChatStore = require('../../stores/ChatStore');
var AppConstants = require('../../constants/AppConstants');
var actions = require('../../actions/AppActionCreator');
var MessagesList = require('./MessagesList.jsx');
var MessageInput = require('./MessageInput.jsx');

var MessageBox = React.createClass({
  displayName: 'MessageBox',
  propTypes: {

  },
  getInitialState: function () {
    return this.getTruth();
  },
  componentWillMount: function () {
    // console.info('MessageBox will mount');
    ChatStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
  },
  render: function () {
    var o = this.state;
    return (
      <div className="message-box">
        <MessagesList arrMessages={o.arrMessages} />
        <MessageInput />
      </div>
    );
  },
  _onChange: function () {
    // console.log("_onChange")
    this.setState( this.getTruth() );
  },
  getTruth: function () {
    return ChatStore.getAll();
  }
});

module.exports = MessageBox;