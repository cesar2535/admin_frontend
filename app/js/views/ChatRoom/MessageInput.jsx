var actions = require('../../actions/AppActionCreator');

var MessageInput = React.createClass({
  displayName: 'MessageInput',
  propTypes: {

  },
  getInitialState: function () {
    return {
      currentItem: {
        name: '',
        uid: null,
        created: null
      }
    }
  },
  componentDidMount: function () {

  },
  render: function () {
    return (
      <form className='message-input' onSubmit={this.handleSubmit}>
        <input type='text' 
               value={this.state.currentItem.name} 
               placeholder="Send a message"
               onChange={this.handleChange}
                />
        <button type='submit' onClick={this.handleClick}>{""}</button>
      </form>
    );
  },
  handleChange: function (event) {
    this.state.currentItem.name = event.target.value;
    this.setState({
      currentItem: this.state.currentItem
    });
  },
  handleClick: function (event) {
    this.handleSubmit();
  },
  handleSubmit: function (event) {
    var item = this.state.currentItem;

    // Block the submit of message if text was empty
    if (item.name.trim().length == 0) return;
    item.created = Date.now();

    // Send the message to server
    actions.sendMessage(item);

    // Clear the input field
    this.setState({
      currentItem: {
        name: '',
        uid: null,
        created: null
      }
    });
  }
});

module.exports = MessageInput;