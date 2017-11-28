//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    mta.App.init({
      "appID": "500489067",
      "eventID": "500489089",
      "statPullDownFresh": true,
      "statShareApp": true,
      "statReachBottom": true
    });
  },
  getUserInfo:function(cb){
    var mta = require('pages/mta/mta_analysis.js')
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    wxUrl: 'https://huahui.qingyy.net/weilaitp/public/wx/',
    imgUrl: 'https://huahui.qingyy.net/weilaitp/public',
  }
})