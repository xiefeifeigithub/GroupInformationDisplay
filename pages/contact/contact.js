// pages/contact/contact.js
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fd6de1c0938fa0ec7fc7630b1eac3ed3/4034970a304e251f0a77c70ba586c9177e3e5344.jpg",
    title: "北京工业大学",
    intro: "北京工业大学（Beijing University of Technology），简称“北工大”，创建于1960年，是一所以工为主，工、理为主的市属重点大学，国家“双一流”建设高校，国家“211工程”大学",
    contab: "联系方式",
    address: "北京市朝阳区平乐园100号",
    mobile: "980924-1128",
    email: "BJUT@outlook.com"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this

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
  }
})