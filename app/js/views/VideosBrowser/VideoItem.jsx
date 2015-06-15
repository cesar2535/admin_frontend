var VideoItem = React.createClass({
  displayName: 'VideoItem',
  propType: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      fileName: React.PropTypes.string.isRequired
    }),
    onClick: React.PropTypes.func.isRequired
  },
  render: function () {
    var video = this.props.video;
    if (!video.image) {
      video.image = '/assets/images/default_file.png';
    }
    return (
      <div className="video-item" onClick={this.props.onClick}>
        <img className="item-img" src={video.image} />
        <span className="item-title">{video.fileName}</span>
      </div>
    );
  }
});

module.exports = VideoItem;