var VideoDetail = React.createClass({
  displayName: 'VideoDetail',
  propTypes: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    return (
      <div className="video-detail">
        <div className="preview">
          <img src="/assets/images/default_file.png" />
        </div>
        <div className="description">
          <h4 className="title">title</h4>
        </div>
        <div className="btns-group">
          <button id="broadcast">B</button>
        </div>
      </div>
    );
  },
  onBroadcastClick: function () {

  }
});

module.exports = VideoDetail;