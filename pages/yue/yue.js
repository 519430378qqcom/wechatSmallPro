var timer1;
var timer2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameList: [{ "name": "东哥", "number": "51723918", "imei": "9A6E73B13CB1CFDEC9010379DEE4A8BB", "cookie":"tHuIebKocq4joXX/W+I7WUr+Wusvt8ewMboCCJ16XDbc4KSBWvvGXj4BBnhZTbYIqJ1DaxQtJ/+7/+tEeAYsioHPi65UvZytawEmsxvVG6kKqNBgGapOGYOwvtW8UG7GiTGs+CSQMpxRAnRFbrWPQYq2S77DdF1TC5Z3IcdGI1QdA8nFuXHZ3YFMC0We4vnKWrPi0ZaOHTrRQqmcwCsTlwu/tFFUbfzxzHnWx/jKLaFVbaWaSgT1hyY7O6zahnNuzoHXoD/NZM530abyqmRlZbp6iXpgq3zCO7QCCmdjxPXmSZ/XkEf0881tymFNrihemIh+ksH0fhv2eE/MgJzQtHHirTswnodK1EX2KZjAOgS4EyTEYogm0Q1gsWnlUuPj12evQkhBIh68+ZXB2VsuKA=="},
      { "name": "源源", "number": "51723918", "imei": "9A6E73B13CB1CFDEC9010379DEE4A8BB", "cookie": "tHuIebKocq4joXX/W+I7WUr+Wusvt8ewMboCCJ16XDbc4KSBWvvGXj4BBnhZTbYIqJ1DaxQtJ/+7/+tEeAYsioHPi65UvZytawEmsxvVG6kKqNBgGapOGYOwvtW8UG7GiTGs+CSQMpxRAnRFbrWPQYq2S77DdF1TC5Z3IcdGI1QdA8nFuXHZ3YFMC0We4vnKWrPi0ZaOHTrRQqmcwCsTlwu/tFFUbfzxzHnWx/jKLaFVbaWaSgT1hyY7O6zahnNuzoHXoD/NZM530abyqmRlZYAiQCg9UfOyMIvci9bTmyfzjbTOHsxgT82cbUhFdL6OU+urCetR7dP2eE/MgJzQtHHirTswnodK1EX2KZjAOgS4EyTEYogm0Q1gsWnlUuPj12evQkhBIh68+ZXB2VsuKA==" }],
      userInfo:"",
      yueTime1:"",
      yueTime2:"",
      error:"",
      yueList:[],
      arrayResult1:[],
      arrayResult2: [],
      arrayResult3: [],
      yuing:false,
      strategy:0,
      hasCheck:[],
      yueIndex:0
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
  formatTime:function(date) {
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return hour+":"+minute+":"+second;
  },
  radioChange: function (e){
    this.data.userInfo = this.data.nameList[e.detail.value]
  },
  radioChange1: function (e) {
    this.data.strategy = e.detail.value
  },
  radioChange2: function (e) {
    this.data.strategy = parseInt(e.detail.value) + 3
  },
  bindDateChange1: function(e){
    var array = e.detail.value.split("-");
    this.setData({
      yueTime1: array[0]+"年"+ array[1]+"月"+array[2]+"日"
    });
  },
  bindDateChange2: function (e) {
    var array = e.detail.value.split("-");
    this.setData({
      yueTime2: array[0] + "年" + array[1] + "月" + array[2] + "日"
    });
  },
  start: function (){
    if(this.data.yueTime1 == ""){
      wx.showToast({
        title: '请输入约车时间',
        duration: 1000,
      })
      return;
    }
    if (this.data.userInfo == "") {
      wx.showToast({
        title: '请选择约车人',
        duration: 1000,
      })
      return;
    }
    var that = this;
    that.setData({
      error: "正在约车"
    }); 
    var strategy = this.data.strategy; 
    timer2 = setInterval(function (){
      if (strategy == 0) {
        that.getYueInfo(that.data.yueTime1,"2001");
      } else if (strategy == 1){
        that.getYueInfo(that.data.yueTime1, "2002");
      } else if (strategy == 2) {
        that.getYueInfo(that.data.yueTime1, "2003");
      } else if (strategy == 3) {
        that.getYueInfo(that.data.yueTime1, "2001");
        that.getYueInfo(that.data.yueTime1, "2002");
        that.getYueInfo(that.data.yueTime1, "2003");
      } else if (strategy == 4) {
        that.getYueInfo(that.data.yueTime1, "2002");
        that.getYueInfo(that.data.yueTime1, "2001");
        that.getYueInfo(that.data.yueTime1, "2003");
      } else if (strategy == 5) {
        that.getYueInfo(that.data.yueTime1, "2003");
        that.getYueInfo(that.data.yueTime1, "2001");
        that.getYueInfo(that.data.yueTime1, "2002");
      }
    },1000);
    timer1 = setInterval(function () {
      if (that.data.arrayResult.length > 0 && !that.data.yuing) {
        that.yue(that.data.arrayResult[that.data.yueIndex]);
        that.data.yueIndex ++;
      }
    }, 200);
  },

  stop: function (){
    clearInterval(timer1);
    clearInterval(timer2);
  },
  getYueInfo:function(time,check){
    for(var i=0;i<this.data.hasCheck.length;i++){
      if (this.data.hasCheck[i] = check){
        return;
      }
    }
    var that = this;
    var params = {
      "osversion": "7.0",
      "ossdk": "24",
      "filters[yyrq]": time,
      "imei": that.data.userInfo.imei,
      "xxzh": that.data.userInfo.number,
      "appversion": "4.0.0",
      "filters[xnsd]": check,
      "version": "4.0.0",
      "ipaddress": "192.168.137.231",
      "filters[xxzh]": that.data.userInfo.number,
      "os": "an"
    }
    wx.request({
      url: "http://haijia.xuechebu.com:8008/KM2/ClYyCars2",
      data: params,
      header: { cookie: "JX_LoginOn=" + that.data.userInfo.cookie },
      method: "GET",
      success: function (e) {
        console.info(e);
        if (e.data.data != null) {
          var arrayResult = e.data.data.Result;
          if(arrayResult.length>0){
            if(check = "2001"){
              that.data.arrayResult1 = arrayResult1;
            }else if(check = "2002"){
              that.data.arrayResult2 = arrayResult2;
            }
            else if (check = "2003") {
              that.data.arrayResult3 = arrayResult3;
            }
            that.data.hasCheck.push(check)
          }
          that.addYueInfo({
            "nowTime": that.formatTime(new Date()),
            "count": arrayResult.length,
            "time" : time,
            "check":check
          });
        } else {
          that.setData({
            error: e.data.data.message
          });
        }
      }
    });
  },
  addYueInfo:function(e){
    var array = this.data.yueList;
    array.unshift(e)
    this.setData({
      yueList:array
    });
  },
  yue:function(result){
    console.info("yue");
    var that = this;
    that.data.yuing = true;
    var params = {
      "osversion": "7.0",
      "ossdk": "24",
      "imei": that.data.userInfo.imei,
      "xxzh": that.data.userInfo.number,
      "appversion": "4.0.0",
      "version": "4.0.0",
      "ipaddress": "192.168.137.231",
      "os": "an",
      "params": result.CNBH + "."+that.data.timer1+"."+result.check+"."
    }
    wx.request({
      url: "http://haijia.xuechebu.com:8008/KM2/ClYyAddByMutil",
      data: params,
      header: { cookie: "JX_LoginOn=" + that.data.userInfo.cookie },
      method: "GET",
      success: function (e) {
        if(e.data.data.code = 0){
          that.setData({
            error:"约车成功",
            yuing:true
          });
        }
        that.data.yuing = false;
      }
    });
  }
})