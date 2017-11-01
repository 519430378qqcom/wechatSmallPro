var wxcookie = require('wxcookie.js')
var Promise = require('../libs/es6-promise.min')
var util = require('util')
function requstGet(url, data, header) {
  return requst(url, 'GET', data, header)
}
function requstPost(url, data, header) {
  return requst(url, 'POST', data, header)
}
//封装Request请求方法
function requst(url, method, data, header) {
  wx.showNavigationBarLoading();

  if (typeof header == "undefined" || header == null) {
    header = "";
  }
  var cookiestr = wxcookie.getCookieStr();
  var header2;
  if (method == "GET") {
    header2 = {
      "Cookie": cookiestr
    };
  } else if (method == "POST") {
    header2 = {
      "Cookie": cookiestr,
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }
  util.log("请求"+url);
  util.log("携带cookie");
  util.log(header2);
  return new Promise((resove, reject) => {
    wx.request({
      url: url,
      data: data,
      header: header2,
      method: method.toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        util.log("请求" + url + "结果如下：");
        util.log(res);
        //解析cookie,并存储起来
        wxcookie.parseCookie(res);
        resove(res);
      },
      fail: function (msg) {
        util.log("请求" + url + "失败");
        util.log("失败msg："+msg)
        reject('fail')
      },complete: function (msg){
        wx.hideNavigationBarLoading();
      }
    })
  })
}
module.exports = {
  get: requstGet,
  post: requstPost,
}