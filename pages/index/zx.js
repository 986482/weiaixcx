//index.js
//获取应用实例
var common = require("../../utils/util.js");
var app = getApp();
const imgurl = app.globalData.imgUrl;
Page({
  data: {
    array: [
      {url:'http://www.weilaihexun.com/wxxcx/images/sy_b1.jpg'},
      {url:'http://www.weilaihexun.com/wxxcx/images/sy_b2.jpg'}
    ],
    imgurl:imgurl,
    getNew:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getNew();
  },
  getNew:function(){
    var that = this;
    common.httpG('article/index',{},function(data){
      if(data.code == 0){
        that.setData({
          getNew: data.data
        })
      }
    })
  },
})