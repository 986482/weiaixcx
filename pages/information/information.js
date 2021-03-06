// pages/article/article.js
var common = require("../../utils/util.js");
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

const imgurl = app.globalData.imgUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: imgurl,
    article: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.id;
    // WxParse.wxParse('aaa', 'html', aaa, that, 5)
    that.getArticle(id);
	
    
  },
  getArticle: function (id) {
    var that = this
    common.httpG('article/getInfo', { id: id }, function (data) {
      that.setData({
        article:data.data,
        cont : WxParse.wxParse('cont', 'html', data.data.cont, that, 5)
      })
    })
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