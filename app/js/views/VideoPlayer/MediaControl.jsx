var MediaControl = React.createClass({
  displayName: 'MediaControl',
  render: function () {
    return (
      <div className="media-control">
        <div className="play"></div>
        <div className="pause"></div>
        <div className="fullscreen"></div>
      </div>
    );
  }
});

module.exports = MediaControl;