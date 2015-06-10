var MessagesList = require('./MessagesList.jsx');
var MessageInput = require('./MessageInput.jsx');

var MessageBox = React.createClass({
  displayName: 'MessageBox',
  getInitialState: function () {

  },
  render: function () {
    return (
      <div className="message-box">
        <MessagesList />
        <MessageInput />
      </div>
    );
  }
});

module.exports = MessageBox;