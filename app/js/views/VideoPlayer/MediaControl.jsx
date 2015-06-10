var MediaControl = React.createClass({
  displayName: 'MediaControl',
  render: function () {
    return (
      <div className="media-control">
        <div className="play" onClick={this.handlePlay}></div>
        <div className="pause"></div>
        <div className="fullscreen"></div>
      </div>
    );
  },
  handlePlay: function () {

  },
});

module.exports = MediaControl;