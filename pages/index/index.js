//index.js
//获取应用实例
var app = getApp()
var order = ['img1', 'img2', 'img3', 'img4']
Page({

  onShareAppMessage: function () {
    return {
      title: '未来和讯+',
      path: '/page/index/index',
      success: function (res) {
        // 转发成功
/**        var shareTickes = res.shareTickes;
        if (shareTickes.length == 0) {
          return false;
        }
        wx.getShareInfo({
          shareTicket: shareTicket[0],
          success: function (res) {
            var encryptedData = res.encryptedData;
            var iv = res.iv;
          }
        })
**/
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  data: {
    array: [
      { url: 'http://www.weilaihexun.com/wxxcx/images/sy_b3.jpg' },
      { url: 'http://www.weilaihexun.com/wxxcx/images/sy_b2.jpg' },
      { url: 'http://www.weilaihexun.com/wxxcx/images/sy_b4.jpg' },
      { url: 'http://www.weilaihexun.com/wxxcx/images/sy_b5.jpg' }
    ],
  },

  onLoad: function () {
    // mta.Page.init()
  },
  //专题显示全部
  index1: function () {
    wx.navigateTo({
      url: '../../pages/index/ztall'
    })
  },
  //h5页面跳转
  h5_img3: function () {
    wx.navigateTo({
      url: '../../pages/index/h5'
    })
  },
  //微信小程序
  wx_img2: function () {
    wx.navigateTo({
      url: '../../pages/index/wxsmall'
    })
  },
  //公众号
  wx_img1: function () {
    wx.navigateTo({
      url: '../../pages/index/gzh'
    })
  },
  //云服务器
  yfwq_img: function () {
    wx.navigateTo({
      url: '../../pages/index/yfwq'
    })
  },
  //域名
  com_img: function () {
    wx.navigateTo({
      url: '../../pages/index/com'
    })
  },
  //主机
  zj_img: function () {
    wx.navigateTo({
      url: '../../pages/index/zj'
    })
  },
  //全案营销
  index3: function () {
    wx.navigateTo({
      url: '../../pages/index/qayx'
    })
  },
  //金牌托管
  index2: function () {
    wx.navigateTo({
      url: '../../pages/index/jptg'
    })
  },
  //追寻创客
  index4: function () {
    wx.navigateTo({
      url: '../../pages/index/zxck'
    })
  },
  //index动态新闻
  dt_tt: function () {
    wx.navigateTo({
      url: '../../pages/index/dt'
    })
  },

})
