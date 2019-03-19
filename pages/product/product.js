// pages/product/product.js

var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      { id: 1, title: "谢飞飞", img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/fbmvvuK4JX2VC5b2Yi75jiwnex5.fyXtxUxhiy3Xsdc!/b/dL8AAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4", cNo: "16041527" },
      { id: 2, title: "高婧怡", img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/CqoEFP4l1fl6TPHiHq1t3Z8n8pDd7WIenzswGzwIADk!/b/dDcBAAAAAAAA&amp;bo=aQTTAwAAAAARF50!&amp;rf=viewer_4", cNo: "16041505" },
      { id: 3, title: "安亚辉", img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/SmbyQcdWKIg2HaMFMFdl5S16wHDUhIqkXkTjaCf4Ypk!/b/dLYAAAAAAAAA&bo=vwO*AwAAAAARBzA!&rf=viewer_4", cNo: "16010328" },
      { id: 4, title: "索达", img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/aeLJMpTKj9XcW3SJd8.1.p9VR9PtiNWXjhu41pbrtJU!/b/dDEBAAAAAAAA&bo=wAPAAwAAAAARFyA!&rf=viewer_4", cNo: "16041601" },
      { id: 5, title: "李艺丰", img: "http://m.qpic.cn/psb?/V12uW2jZ46zEwz/DGwbmXooCa9*RGKkQ4KQqVzNZO2otu3kwIvHo6JKwBI!/b/dL8AAAAAAAAA&bo=vwO*AwAAAAARFyA!&rf=viewer_4", cNo: "16041605" }
    ],
    Url: ['../../pages/xiefeifei/xff?id={{id}}', '../../pages/gaojingyi/gjy?id={{id}}', '../../pages/anyahui/ayh?id={{id}}', '../../pages/suoda/sd?id={{id}}', '../../pages/liyifeng/lyf?id={{id}}']
  },
  
  navito: function (e) {    // 点击不同的列表跳转到列表详情    
  var that=this;   
   var id = e.currentTarget.dataset.objectId-1;    
   wx.navigateTo({      
     url: that.data.Url[id]   
   });  
   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that=this;

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
    if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向右滑动");
      wx.switchTab({
        url: '../contact/contact'
      })
    }
    // 向右滑动   
    if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向左滑动");
      wx.switchTab({
        url: '../index/index'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  }
})

