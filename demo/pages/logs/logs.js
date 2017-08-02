//input.js
Page({
  data: {
    focus: false,
    data:[],
    inputValue:""

  },
  show(event) {

    wx.navigateTo({
      url: '../detail/detail?movie=' + event.target.dataset.movie
    })
  },
  find:function(e){
    this.setData({
      inputValue: e.detail.value
    })
    console.log('bindInput' + this.data.inputValue) 
  },
  submit: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/search?' + 'q' + '=' +that.data.inputValue,

      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          data: res.data.subjects

        })

        wx.hideLoading();
      }
    })
  },
  onLoad: function (options) {
   
   

  }
})