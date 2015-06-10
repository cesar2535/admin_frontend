// Using JW player

var Video = React.createClass({
  displayName: 'Video',
  getInitialState: function () {
    return {
      playing: false,
      canPlay: false
    }
  },
  componentDidMount: function () {
    this.$video = document.getElementById('video');
  },
  render: function () {
    return (
      <div id='video' className='video'></div>
    );
  },
  handlePlay: function (event) {

  }
});

module.exports = Video;