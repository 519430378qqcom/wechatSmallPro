/**
 * Cookie
 */
/**
 * 解析请求头中["Set-Cookie"]部分并储存
 */
function parseCookie(res) {
  var cookieStr = res.header["Set-Cookie"];
  if (cookieStr == null || typeof cookieStr == "undefined") {
    return;
  }
  var cookieArray = cookieStr.split("domain=youmi.cn,");
  var cookieKey = "";
  try {
    //获取保存过的cookieKey
    cookieKey = wx.getStorageSync("cookieKey");
  }
  catch (e) {

  }
  for (var i = 0; i < cookieArray.length; i++) {
    //截取每条cookie的key，value,expires
    var item = cookieArray[i].split(";");
    var originStr = item[0];
    var index1 = originStr.indexOf("=");
    var key = originStr.substring(0, index1);
    var value = originStr.substring(index1 + 1);
    var originStr1 = item[1];
    var index3 = originStr1.indexOf("=");
    var date = originStr1.substring(index3 + 1);
    var timestamp = Date.parse(date);
    try {
      //保存单条cookie
      wx.setStorageSync(key, {
        "value": value,
        "expires": timestamp
      })
      //判断cookieKey是否重复，不重复添加
      if (cookieKey.indexOf(key) == -1) {
        if (cookieKey == "") {
          cookieKey += key;
        } else {
          cookieKey += ";" + key;
        }
      }
    } catch (e) {

    }
  }
  //保存最终的cookieKey值
  try {
    wx.setStorageSync("cookieKey", cookieKey)
  }
  catch (e) {

  }
}
/**
 * 获取保存的cookie串
 */
function getCookieStr() {
  var cookieKey = "";
  var cookieStr = "";
  try {
    //获取cookieKey
    cookieKey = wx.getStorageSync("cookieKey");
  }
  catch (e) {

  }
  if (cookieKey == "") {
    return cookieStr;
  }
  var keyArray = cookieKey.split(";");
  //循环遍历key值
  var cookie;
  for (var i = 0; i < keyArray.length; i++) {
    try {
      cookie = wx.getStorageSync(keyArray[i]);
    }
    catch (e) {

    }
    //判断cookie是否过期
    if (cookie.expires > new Date().getTime()) {
      if (i == 0) {
        cookieStr += keyArray[i] + "=" + cookie.value;
      } else {
        cookieStr += ";" + keyArray[i] + "=" + cookie.value;
      }
    }
  }
  return cookieStr;
}
module.exports = {
  parseCookie: parseCookie,
  getCookieStr: getCookieStr
}
