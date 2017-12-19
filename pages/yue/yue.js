Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameList: [{ "name": "东哥", "number": "51723918", "imei": "9A6E73B13CB1CFDEC9010379DEE4A8BB", "cookie":"tHuIebKocq4joXX/W+I7WUr+Wusvt8ewMboCCJ16XDbc4KSBWvvGXj4BBnhZTbYIqJ1DaxQtJ/+7/+tEeAYsioHPi65UvZytawEmsxvVG6kKqNBgGapOGYOwvtW8UG7GiTGs+CSQMpxRAnRFbrWPQYq2S77DdF1TC5Z3IcdGI1QdA8nFuXHZ3YFMC0We4vnKWrPi0ZaOHTrRQqmcwCsTlwu/tFFUbfzxzHnWx/jKLaFVbaWaSgT1hyY7O6zahnNuzoHXoD/NZM530abyqmRlZYAiQCg9UfOyMIvci9bTmyfzjbTOHsxgT82cbUhFdL6OU+urCetR7dP2eE/MgJzQtHHirTswnodK1EX2KZjAOgS4EyTEYogm0Q1gsWnlUuPj12evQkhBIh68+ZXB2VsuKA=="},
      { "name": "源源", "number": "51723918", "imei": "9A6E73B13CB1CFDEC9010379DEE4A8BB", "cookie": "tHuIebKocq4joXX/W+I7WUr+Wusvt8ewMboCCJ16XDbc4KSBWvvGXj4BBnhZTbYIqJ1DaxQtJ/+7/+tEeAYsioHPi65UvZytawEmsxvVG6kKqNBgGapOGYOwvtW8UG7GiTGs+CSQMpxRAnRFbrWPQYq2S77DdF1TC5Z3IcdGI1QdA8nFuXHZ3YFMC0We4vnKWrPi0ZaOHTrRQqmcwCsTlwu/tFFUbfzxzHnWx/jKLaFVbaWaSgT1hyY7O6zahnNuzoHXoD/NZM530abyqmRlZYAiQCg9UfOyMIvci9bTmyfzjbTOHsxgT82cbUhFdL6OU+urCetR7dP2eE/MgJzQtHHirTswnodK1EX2KZjAOgS4EyTEYogm0Q1gsWnlUuPj12evQkhBIh68+ZXB2VsuKA==" }],
      checkIndex:""
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

  radioChange: function (e){
    this.data.checkIndex = e.detail.value;
  },

  start: function (){
    wx.request({
      url: "http://haijia.xuechebu.com:8008/KM2/ClYyCars2",
      data: {"osversion":"7.0"},
      header: {},
      method: "GET",
      success: function (){

      }
    });
  },

  stop: function (){

  }
})