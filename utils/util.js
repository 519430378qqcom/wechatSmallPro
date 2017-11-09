var config = require("config.js")
var app = getApp();
/**
 * 邮箱以及手机的正则表达式
 */
function regexConfig() {
  var reg = {
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    phone: /^1(3|4|5|7|8)\d{9}$/
  }
  return reg;
}
function isEmpty(obj) {
  return (typeof obj == "undefined" || obj == null)
}
/**
 * 是否为手机
 */
function isMobile(mobile) {
  if (mobile.length == 0 || mobile.length != 11) {
    return false;
  } else {
    var regex = /^1(3|4|5|7|8)\d{9}$/;
    return regex.test(mobile);
  }
}
/**
 * log打印的方法
 */
function log(e) {
  if (config.enableLog) {
    console.info(e)
  }
}
/**
 * 是否登录
 */
function isLogin(){
  return app.globalData.code !=""; 
}
/**
 * 是否获取到微信用户信息
 */
function hasUserInfo(){
  return !isEmpty(app.globalData.userInfo);
}
module.exports = {
  regexConfig: regexConfig,
  isMobile:isMobile,
  log: log,
  isEmpty:isEmpty,
  isLogin: isLogin,
  hasUserInfo: hasUserInfo
}
