var MessagesList = React.createClass({
  displayName: 'MessagesList',
  render: function () {
    var messages;
    return (
      <ul className='messages-list'>
        {messages}
      </ul>
    );
  }
});

module.exports = MessagesList;