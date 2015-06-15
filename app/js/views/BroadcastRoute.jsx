// 這是 root view，也稱為 controller-view

// var Container = require('./Container.jsx');
var Header = require('./Header/Header.jsx');
var VideoPlayer = require('./VideoPlayer/VideoPlayer.jsx');
var MessageBox = require('./ChatRoom/MessageBox.jsx');
var Webcam = require('./WebcamPlayer/Webcam.jsx');

//
var BroadcastRoute = React.createClass({

  propType: {

  },

  //
  componentWillMount: function() {
    
  },

  //
  componentDidMount: function() {
    console.info('MainApp Did Mount');
  },

  // 元件將從畫面上移除時，要做善後工作
  componentWillUnmount: function() {
  },

  componentDidUnmount: function() {
  },

  // 在 render() 前執行，有機會可先處理 props 後用 setState() 存起來
  componentWillReceiveProps: function(nextProps) {
    //
  },

  //
  shouldComponentUpdate: function(nextProps, nextState) {
  },

  // 這時已不可用 setState()
  componentWillUpdate: function(nextProps, nextState) {
  },

  //
  componentDidUpdate: function(prevProps, prevState) {
  },

  //
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <div id="main">
          <section>
            <div className="title">
              <h1>Title</h1>
            </div>
            <VideoPlayer src="/assets/images/test.mp4" />
          </section>
          <aside>
            <Webcam />
            <MessageBox />
          </aside>
        </div>
      </div>
    );
  },


});

module.exports = BroadcastRoute;
