var app = getApp()
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var flag_hd = true;

Page({
  
  

  //轮播图
  data: {
    imgUrls: [
      
      'http://tu.027cgb.com/618251/1.png',
      'http://tu.027cgb.com/618251/2.jpg',
      'http://tu.027cgb.com/618251/3.jpg',
      'http://tu.027cgb.com/618251/4.jpg',
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    inputShowed: false,
    inputVal: "",

    //首页导航
    info: [
      [{
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "音乐系"
        }
      ],
      [{
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "音乐系"
        },
        {
          "img": "/images/1.jpg",
          "name": "更多"
        }
      ]
    ]
  },

  onLoad: function () {
    var that = this
  },
  onShow: function () {
    flag_hd = true;    //重新进入页面之后，可以再次执行滑动切换页面代码
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
  // 触摸开始事件
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
        url: '../product/product'
      })
    }
    // 向右滑动   
    if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
    flag_hd = false;
    //执行切换页面的方法
    console.log("向左滑动");
    wx.switchTab({
     url: '../contact/contact'
    })
        
     }
    clearInterval(interval); // 清除setInterval
    time = 0;
  }

})