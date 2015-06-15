var actions = require('../../actions/AppActionCreator');

var VideoDetail = React.createClass({
  displayName: 'VideoDetail',
  propTypes: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    var video = this.props.video;

    return (
      <div className="video-detail">
        <div className="preview">
          <img src={video.image} />
        </div>
        <div className="description">
          <h4 className="title">{video.title}</h4>
        </div>
        <div className="btns-group">
          <button id="broadcast" onClick={this.onBroadcastClick}>B</button>
        </div>
      </div>
    );
  },
  onBroadcastClick: function (event) {
  }
});

module.exports = VideoDetail;