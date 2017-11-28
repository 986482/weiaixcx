//index.js
//获取应用实例
var common = require("../../utils/util.js");
var app = getApp();
const imgurl = app.globalData.imgUrl;
Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    src: '../../images/zx11.png',
    src1: '../../images/zx12.jpg',
    imgurl: imgurl,
    article: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    this.getNew();
  },
  getNew: function () {
    var that = this;
    common.httpG('article/getNew',
      {},
      function (data) {


      })
  }
})
