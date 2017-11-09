var util = require("../../utils/util.js");
var canvas = null;
var touchArray = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceInfo : {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    canvas = wx.createCanvasContext("canvas");  
    this.data.deviceInfo = wx.getSystemInfoSync();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var canvas = wx.createCanvasContext("canvas");  
    // var grd = canvas.createLinearGradient(0,0,400,200);
    // grd.addColorStop(0,"red");
    // grd.addColorStop(0.5, "black");
    // grd.addColorStop(1, "white");
    // var grd = canvas.createCircularGradient(125,125,100);
    // grd.addColorStop(0,"red");
    // grd.addColorStop(1,"white");
    // canvas.setFillStyle("red");
    // canvas.setStrokeStyle('#ff0000');
    // canvas.setLineCap("round");
    // canvas.setLineJoin("round");
    // this.data.canvas = canvas;
    // canvas.fillRect(50,50,200,200);
    // canvas.strokeRect(50,50,200,200);
    // canvas.moveTo(50,50);
    // canvas.lineTo(200,50);
    // canvas.lineTo(50,137);
    // canvas.lineTo(125, 7);
    // canvas.lineTo(137, 137);
    // canvas.lineTo(50, 50);
    // canvas.stroke();
    // canvas.draw();
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

  start: function (e){
    this.recordTouch(e);
  },

  move: function (e){
    this.recordTouch(e);
    this.draw();
  },

  end: function (e){
    this.recordTouch(e);
  },
  
  /**
   * 刷新绘制
   */
  draw: function (){
    for (var i = 0; i < touchArray.length; i++) {
      if (touchArray[i].status == "touchstart") {
        canvas.moveTo(touchArray[i].x, touchArray[i].y);
      } else if (touchArray[i].status == "touchmove"){
        canvas.lineTo(touchArray[i].x, touchArray[i].y);
      } else if (touchArray[i].status == "image"){
        canvas.drawImage(touchArray[i].imagePath, touchArray[i].rect[0], touchArray[i].rect[1], touchArray[i].rect[2], touchArray[i].rect[3])
      }
    }
    canvas.stroke();
    canvas.draw();
  },
 
  /**
   * 记录touch状态
   */
  recordTouch: function (e){
    if (e.type != "touchend"){
      touchArray.push({
        status: e.type,
        x: e.touches[0].x,
        y: e.touches[0].y,
      })
    }
  },

  /**
   * 点击选择图片按钮
   */
  chooseImg: function(e){
    var that = this;
    wx.chooseImage({
      success: function(res) {
        touchArray.push({
          status: "image",
          imagePath: res.tempFilePaths[0],
          rect:[0,0,400,600]
        })
        that.draw();
      },
    })    
  },
  drawLop: function (){
    var that = this;
    canvas.clearRect(0,0,500,800);
    var j = 0;
    var int = setInterval(function (){
      for (var i = j; i < j+5; i++) {
        if(i >= touchArray.length){
          break;
          clearInterval(int);
        }
        if (touchArray[i].status == "touchstart") {
          canvas.moveTo(touchArray[i].x, touchArray[i].y);
        } else if (touchArray[i].status == "touchmove") {
          canvas.lineTo(touchArray[i].x, touchArray[i].y);
        } else if (touchArray[i].status == "image") {
          canvas.drawImage(touchArray[i].imagePath, touchArray[i].rect[0], touchArray[i].rect[1], touchArray[i].rect[2], touchArray[i].rect[3])
        }
      }
      canvas.stroke();
      canvas.draw();
      util.log(j);
      j++;
    },100);
  }
})