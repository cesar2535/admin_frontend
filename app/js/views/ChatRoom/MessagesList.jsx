var MessagesList = React.createClass({
  displayName: 'MessagesList',
  propTypes: {

  },
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