var baseUrl = "http://tingapi.ting.baidu.com/v1/restserver/ting?";

module.exports = {
  /**
   * @参数：type；size；offse
   * @example：&type=1&size=10&offset=0
   * type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,
   * 22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜
   * @desc：size = 10 //返回条目数量；offset = 0 //获取偏移
   */
  songRank: baseUrl + "method=baidu.ting.billboard.billList",

  /**
   * @参数：query
   * @example:&query=海阔天空
   */
  songSearch: baseUrl + "method=baidu.ting.search.catalogSug",

  /**
   * @参数：songid
   * @example:&songid=877578
   */
  songPlay: baseUrl + "method=baidu.ting.song.play",

  /**
   * @参数：songid
   * @example：&songid=877578
   */
  songLrc: baseUrl + "method=baidu.ting.song.lry",

  /**
   * @参数：song_id；num
   * @example：&song_id=877578&num=5
   */
  songRecommend: baseUrl + "method=baidu.ting.song.getRecommandSongList",

  /**
   * @参数：songid；bit；_t
   * @example:&songid=877578&bit=24&_t=1393123213
   * bit = 24, 64, 128, 192, 256, 320 ,flac//码率
   * _t = 1430215999,, //时间戳
   */
  songDownLoad: baseUrl + "method=baidu.ting.song.downWeb",

  /**
   * @参数：tinguid
   * @example：&tinguid=877578
   * @desc：tinguid = 877578 //歌手ting id
   */
  artistInfo: baseUrl + "method=baidu.ting.artist.getInfo",

  /**
   * @参数：
   * @example：&tinguid=877578&limits=6&use_cluster=1&order=2
   * @desc：tinguid = 877578//歌手ting id；limits = 6//返回条目数量；其他不管
   */
  artistSongList: baseUrl + "method=baidu.ting.artist.getSongList",
}