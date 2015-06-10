var Video = React.createClass({
  displayName: 'Video',
  componentDidMount: function () {
    this.$video = document.getElementById('video');
  },
  render: function () {
    return (
      <video id='video' className='video'></video>
    );
  }
});

module.exports = Video;