var actions = require('../../actions/AppActionCreator');

var MediaControl = React.createClass({
  displayName: 'MediaControl',
  render: function () {
    return (
      <div className="media-control">
        <div className="play" onClick={this.handlePlay}></div>
        <div className="pause" onClick={this.handlePause}></div>
        <div className="fullscreen"></div>
      </div>
    );
  },
  handlePlay: function (event) {

  },
  handlePause: function (event) {

  }
});

module.exports = MediaControl;