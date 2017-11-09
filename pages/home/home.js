// pages/home/home.js
var Api = require("../../utils/api.js");
var http = require("../../utils/http.js")
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songRankTab: [{ type: 1, name: "新歌榜" }, { type: 2, name: "热歌榜" }, { type: 11, name:"摇滚榜"}, 
    { type: 12, name: "爵士" },{type: 16, name: "流行" }, { type: 21, name: "欧美金曲榜" }, 
    { type: 22, name: "金典老歌榜" },{ type: 23, name: "情歌对唱榜"}, { type: 24, name: "影视金曲榜" }, 
    { type: 25, name: "网络歌曲榜"}],
    songRankList:[],
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  },

  /**
   * 歌榜列表
   */
  songRank: function (type,size,offset){
    var that = this;
    http.get(Api.songRank, {
      type: type,
      size: size,
      offset: offset
    }).then(res => {
      that.setData({
      })
    })
  },

  /**
   * 顶部滚动事件
   */
  tabScroll: function (res){
    util.log(res);
  }
})