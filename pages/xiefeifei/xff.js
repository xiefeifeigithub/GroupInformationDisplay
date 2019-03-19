// pages/xiefeifei/xff.js
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/fbmvvuK4JX2VC5b2Yi75jiwnex5.fyXtxUxhiy3Xsdc!/b/dL8AAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4",
    name: "谢飞飞",
    num: "16041527",
    classnum:"160701",
    college:"信息学部",
    intro: "新时代的搬砖匠",
    contab: "个人信息",
    address: "北京市朝阳区平乐园100号",
    mobile: "18911780647",
    email: "xiefei741000@outlook.com"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    flag_hd = true;    //重新进入页面之后，可以再次执行滑动切换页面代码
    clearInterval(interval); // 清除setInterval
    time = 0;

  },
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸结束事件
  touchEnd: function (e) {
    var touchMove = e.changedTouches[0].pageX;
    // 向左滑动   
    // if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
    //   flag_hd = false;
    //   //执行切换页面的方法
    //   console.log("向右滑动");
    //   wx.switchTab({
    //     url: '../contact/contact'
    //   })
    // }
    // 向右滑动   
    if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向左滑动");
      wx.switchTab({
        url: '../product/product'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})