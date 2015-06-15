var actions = require('../../actions/AppActionCreator');
var VideoItem = require('./VideoItem.jsx');

var VideosList = React.createClass({
  displayName: 'VideosList',
  propTypes: {
    arrVideos: React.PropTypes.array.isRequired
  },
  render: function () {
    var arrVideos = this.props.arrVideos;

    var that = this;
    var arr = arrVideos.map(function (item) {
      return <VideoItem key={item.uid} video={item} onClick={this.handleClick.bind(this, item)} />
    }, this);

    return (
      <div className="videos-list">
        {arr}
      </div>
    );
  },
  handleClick: function (item) {
    console.log(item);
  }
});

module.exports = VideosList;