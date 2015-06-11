var Video = require('./Video.jsx');
var MediaControl = require('./MediaControl.jsx');

var VideoPlayer = React.createClass({
  displayName: 'VideoPlayer',
  render: function () {
    return (
      <div className="video-player">
        <Video />
        <MediaControl />
      </div>
    );
  }
});

module.exports = VideoPlayer;