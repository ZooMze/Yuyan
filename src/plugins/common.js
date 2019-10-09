import vue from 'vue';
import router from '.././router'
import store from '.././store'
import qs from "qs"
const Vue = new vue({router, store}); //注册router, 实例中调用

export default {
  basePath:      `${window.location.origin}/apis`,
  // basePath:      'http://adminwisdom.yuyankeji.cn',
  uploadPath:    `${window.location.origin}/apis/admin/activity/wangEditorImg`,
  filePath:      `https://adminwisdom.yuyankeji.cn`, //文件的地址前缀
  emailReg:      /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  mobileReg:     /^1[34578]\d{9}$/,
  /**
   * 遍历树(递归遍历), 删除空白的childrens
   * @param  {object}   node 根节点(单个对象, 多个树需要重复调用)
   * @return none
   */
  traverseTree (node) {
    if (!node) {
      return;
    }
    if (node.childrens && node.childrens.length > 0) {
      var i = 0;
      for (i = 0; i < node.childrens.length; i++) {
        this.traverseTree(node.childrens[i]); 
      }
    } else {
      delete node.childrens
    }
  },
  /**
  * 将时间戳按照格式转换, 默认格式 yyyy-MM-dd hh:mm
  * @params {string/number} timeSetback 时间戳
  * @params {string} format 时间格式
  */
  convertDate(timeStamp, format){
    let time = timeStamp.toString()
    let resultTime
    time.length == 10 ? resultTime = parseInt(time)*1000 : resultTime = parseInt(time)

    return timeStamp ? new Date(resultTime).Format(format ? format : 'yyyy-MM-dd hh:mm') : '';
  },
  /*
   * 性别转文字
   */
  transferGender(sex){
    return sex == 1 ? '男' : '女'
  },
  lengthValidate() {
    
  },
  /**
   * 根据日期字符串获取星期几
   * @param dateString 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
   * @returns {String}
   */
  getWeek(dateString){ 
    var date; 
    date = new Date(dateString) 
    return "星期" + "日一二三四五六".charAt(date.getDay());
  },
  /**
   * 深拷贝对象
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  deepCopy(data) {
    let result = {}
    try {
      result = JSON.parse(JSON.stringify(data))
    }
    catch (error) {
      console.log(error)
    }
    return result
  },
  /*
   * blod 下载附件
   */
  _fileBold(response) { 
    let fileName = decodeURI(response.headers['content-disposition'].substring(20, response.headers['content-disposition'].length));
    let url = window.URL.createObjectURL(new Blob([response.data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  },
  
}
/*
*   格式化日期格式
*/
Date.prototype.Format = function (fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}