//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    data:[],
    title:[]
   
  },
  show(event){
    
    wx.navigateTo({
      url: '../detail/detail?movie=' + event.target.dataset.movie
    })
  },
  //事件处理函数
 
  onLoad: function () {
  
  var that = this;
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'https://api.douban.com/v2/movie/top250', 
   
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      console.log(res.data)
      that.setData({
        data: res.data.subjects,
        title:res.data.title
      })
      wx.hideLoading();
    }
  })
  }
})
