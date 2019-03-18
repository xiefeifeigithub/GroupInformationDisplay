var app = getApp()

Page({

  //轮播图
  data: {
    imgUrls: [
      'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      'http://hbimg.b0.upaiyun.com/fc5ea1910ac41d53bb7fb6e10b038032b990a0b16d81-RpYXSy_fw658',
      'http://img17.3lian.com/d/file/201701/23/cbf3ce5314f244113bd011f1a6d40bbd.jpg'
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


})