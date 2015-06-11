var actions = require('../../actions/AppActionCreator');
var VideoItem = require('./VideoItem.jsx');

var VideosList = React.createClass({
  displayName: 'VideosList',
  render: function () {
    var arrVideos;

    var arr = arrVideos.map(function (item) {
      return <VideoItem video={item} onClick={this.handleClick.bind(this, item)} />
    });
  },
  handleClick: function (event) {

  }
});

module.exports = VideosList;