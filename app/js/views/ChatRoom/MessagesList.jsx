var MessagesList = React.createClass({
  displayName: 'MessagesList',
  propTypes: {

  },
  render: function () {
    var arrMessages;
    var messages = arrMessages.map(function (item) {
      return (
        <li>
          <span className="username"></span>
          <span className="content"></span>
        </li>
      );
    });
    return (
      <ul className='messages-list'>
        {messages}
      </ul>
    );
  }
});

module.exports = MessagesList;