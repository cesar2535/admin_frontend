var VideoItem = React.createClass({
  displayName: 'VideoItem',
  propType: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired
    }),
    onClick: React.PropTypes.func.isRequired
  },
  render: function () {
    var video = this.props.video;

    return (
      <div className="video-item" onClick={this.props.onClick}>
        <img className="item-img" src={video.image} />
        <h4 className="item-title">{video.title}</h4>
      </div>
    );
  }
});

module.exports = VideoItem;