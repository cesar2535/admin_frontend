var Webcam = React.createClass({
  displayName: 'Webcam',
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    console.log(this.props);

  },
  render: function () {
    return (
      <div className="webcam" onClick={this.handleClick}>
        <object type="application/x-shockwave-flash" data="/assets/player/VideoIO.swf"
            id="video1" width="320px" height="240px">
          <param name="movie" value="VideoIO.swf" />
          <param name="quality" value="high" />
          <param name="bgcolor" value="#000000" />
          <param name="allowScriptAccess" value="always" />
          <param name="flashVars" value="controls=true&cameraQuality=80&cameraFPS=60&encodeQuality=10" />
        </object>
      </div>
    );
  },
  getFlashMovie: function (movieName) {
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    return (isIE) ? window[movieName] : document[movieName];
  },
  handleClick: function () {
    // console.log('handleClick');
    var webcam = this.getFlashMovie('video1');
    var src = 'rtmp://192.168.0.108:1935/rtmp?publish=webcam_' + this.props.streamingId + '&record=false';
    console.log(src);
    // console.log(webcam);
    webcam.setProperty('src', src);
  }
});

module.exports = Webcam;