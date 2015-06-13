// var Video = require('./Video.jsx');
// var MediaControl = require('./MediaControl.jsx');

var VideoPlayer = React.createClass({
  displayName: 'VideoPlayer',
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      duration: 0,
      currentTime: 0,
      seeking: false,
      playing: false
    };
  },
  componentDidMount: function () {
    console.info('VideoPlayer Did Mount');
    this.jwplayer = jwplayer('video').setup({
      file: this.props.src,
      width: "100%",
      aspectratio: "16:9"
    });

    this.jwplayer.onPlay(this.onPlay);
    this.jwplayer.onPause(this.onPause);
    this.jwplayer.onBuffer(this.onBuffer);
    this.jwplayer.onIdle(this.onIdle);
    this.jwplayer.onComplete(this.onComplete);
    this.jwplayer.onError(this.onError);
  },
  render: function () {
    return (
      <div className="video-player">
        <div id="video"></div>
        
      </div>
    );
  },
  onPlay: function (event) {
    console.info('onPlay');
    this.setState({
      playing: true
    });

  },
  onPause: function (event) {
    console.info('onPause');
    this.setState({
      playing:false
    });
  },
  onBuffer: function (event) {
    console.info('onBuffer');
  },
  onIdle: function (event) {
    console.info('onIdle');
  },
  onComplete: function (event) {
    console.info('onComplete');
  },
  onError: function (event) {
    console.error('onError');
  },
  play: function () {
    console.info('Play func');
    if (!this.state.playing) {
      this.jwplayer.play(true);
    } else {
      this.jwplayer.pause(true);
    }
  }
});

module.exports = VideoPlayer;