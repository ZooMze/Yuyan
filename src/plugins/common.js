import vue from 'vue'
import router from '.././router'
import store from '.././store'
import qs from 'qs'
const Vue = new vue({ router, store }) // 注册router, 实例中调用

export default {
  basePath: `${window.location.origin}/apis/`,
  // basePath:   'https://test1meeting.yuyankeji.cn/',
  uploadPath: `${window.location.origin}/apis/meeting/meeting/appImg`,
  filePath:   `https://test1meeting.yuyankeji.cn/`,
  // 邮箱
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  // 手机号
  mobileNum: /^((\+|00)86)?1\d{10}$/,
  // 汉字
  chineseChar: /[\u4E00-\u9FA5\uF900-\uFA2D]/,
  // 空格
  space: /\s+/g,
  // 特殊英文字符
  specialEn: /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
  // 特殊中文字符
  specialCn: /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
  // 有两位小数的正实数
  TwoPointzhenshishu: /^[0-9]+(\.[0-9]{2})?$/,
  // 一个月1-31天
  monthDay: /^(([1-9])|((1|2)[0-9])|30|31)$/,
  // 正整数
  zhengZhenshu: /^[1-9]\d*$/,
  // 特殊小写字符
  // // 银行卡号
  // bankNum: /^((\+|00)86)?1\d{10}$/,
  // // 账户是否合法（字母数字下划线组合）
  // account: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
  // 特殊字符
  // specialStr: new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
  // 密码(6到12位 必须字母数字英文特殊符号组合)
  strictPassword: /^(?:(?=.*[0-9].*)(?=.*[A-Za-z].*)(?=.*[,\.#%'\+\*\-:;^_`\?!@$&].*))[,\.#%'\+\*\-:;^_`\?!@$&0-9A-Za-z]{6,12}$/,
  //6到12位数字或字母
  normalPassword: /^[0-9A-Za-z]{6,12}$/,

  /**
   * 遍历树(递归遍历), 删除空白的childrens
   * @param  {object}   node 根节点(单个对象, 多个树需要重复调用)
   * @return none
   */
  traverseTree (node) {
    if (!node) {
      return
    }
    if (node.childrens && node.childrens.length > 0) {
      var i = 0
      for (i = 0; i < node.childrens.length; i++) {
        this.traverseTree(node.childrens[i])
      }
    } else {
      delete node.childrens
    }
  },
  /**
   * 字符串通过','分割为数组
   * @param str String 字符串
   * @param  {object}   node 根节点(单个对象, 多个树需要重复调用)
   * @return {Array}
   */
  strSplitArrayBydou (str) {
    if (!str) {
      return []
    } else if (str.indexOf(',') !== -1) {
      return str.split(',')
    } else {
      return [str]
    }
  },
  /**
   * 时间戳转化为年 月 日 时 分 秒
   * number: 传入时间戳
   * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 默认'Y-M-D h:m'
   */
  convertDate (number, format='Y-M-D h:m') {
    let  formateArr  = ['Y','M','D','h','m','s']
    let returnArr   = []
    var date = new Date(number * 1000)
    returnArr.push(date.getFullYear())
    returnArr.push(this.formatNumber(date.getMonth() + 1))
    returnArr.push(this.formatNumber(date.getDate()))
    returnArr.push(this.formatNumber(date.getHours()))
    returnArr.push(this.formatNumber(date.getMinutes()))
    returnArr.push(this.formatNumber(date.getSeconds()))

    for (const i in returnArr)
    {
      format = format.replace(formateArr[i], returnArr[i])
    }
    return format
    // let time = timeStamp.toString()
    // let resultTime
    // time.length == 10 ? resultTime = parseInt(time) * 1000 : resultTime = parseInt(time)
    //
    // return timeStamp ? new Date(resultTime).Format(format || 'yyyy-MM-dd hh:mm') : ''
  },
  /**
   * 时间戳转化为年 月 日 时 分 秒
   * number: 传入时间戳
   * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 默认'Y-M-D h:m'
   */
 formatTime(number, format='Y-M-D h:m') {
  let  formateArr  = ['Y','M','D','h','m','s']
  let returnArr   = []

  var date = new Date(number * 1000)
  returnArr.push(date.getFullYear())
  returnArr.push(this.formatNumber(date.getMonth() + 1))
  returnArr.push(this.formatNumber(date.getDate()))
  returnArr.push(this.formatNumber(date.getHours()))
  returnArr.push(this.formatNumber(date.getMinutes()))
  returnArr.push(this.formatNumber(date.getSeconds()))

  for (const i in returnArr)
  {
    format = format.replace(formateArr[i], returnArr[i])
  }
  return format
},
/*
*数据转化
 */

formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
},
  /*
  *判断操作系统
   */
  detectOS () {
    let operatingInfo = navigator.userAgent
    let isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows")
    if(isWin)
    return "Windows"
    let isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac"
    let isUnix = (navigator.platform == "X11") && !isWin && !isMac
    if (isUnix) return "Unix"
    let isLinux = (String(navigator.platform).indexOf("Linux") > -1)
    if (isLinux) return "Linux"
  },
/*
 * 性别转文字
 */
  transferGender (sex) {
    return sex == 3 ? '保密' : sex == 1 ? '男' : '女'
  },
  lengthValidate () {

  },
  /**
   * 根据日期字符串获取星期几
   * @param dateString 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
   * @returns {String}
   */
  getWeek (dateString) {
    var date
    date = new Date(dateString)
    return '星期' + '日一二三四五六'.charAt(date.getDay())
  },
  /**
   * 深拷贝对象
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  deepCopy (data) {
    let result = {}
    try {
      result = JSON.parse(JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
    return result
  },
  /*
   * blod 下载附件
   */
  _fileBold (response) {
    let fileName = decodeURI(response.headers['content-disposition'].substring(20, response.headers['content-disposition'].length))
    let url = window.URL.createObjectURL(new Blob([response.data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  },
  /**
  *获取签名
  * @param data 需要加密的参数
   */
  makeSign (data) {
    // 参数传入timestamp
    data['timestamp'] = +new Date()
    // data['timestamp'] = 20190803112045
    let _array = []
    for (const key in data) {
      // key转换成小写
      let lowKey = key.toLowerCase()
      // value urlencode编码
      let ucodeValue = encodeURIComponent(data[key])
      _array.push(`${lowKey}=${ucodeValue}`)
    }
    // 字典序升序排列
    _array = _array.sort((a, b) => {
      let _boolean = a.split('=')[0] > b.split('=')[0]
      return _boolean ? 1 : -1
    })
    // 参数数组加入特有参数key
    _array.push('key=hhdjasWASDS12312BSDFS')
    // console.log(decodeURIComponent(_array.join('&')))
    let sign = Vue.md5(decodeURIComponent(_array.join('&')))
    return sign.toUpperCase()
  },
  // 判断对象是否包含空属性 包括null
  objectHasEmptyV (object) {
    // 判断对象类型
    if (Object.prototype.toString.call(object) === '[object Object]') {
      if (!Object.values(object).length) {
        // throw  new Error("not need a empty object")
        return true
      } else if(Object.values(object).indexOf('') !== -1 || Object.values(object).indexOf(null) !== -1) {
        return true
      } else {
        return false
      }
    } else {
      throw new Error('need a Object')
    }
    // if(object.prototype.toString().call(object) === [Object ])
    // Object.values(object)
  }
}
/*
*   格式化日期格式
*/
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

// 去除字符串前面空格
String.prototype.LTrim = function () {
  return this.replace(/(^\s*)/g, '')
}
// 去除字符串后面空格
String.prototype.RTrim = function () {
  return this.replace(/(\s*$)/g, '')
}
//删除数组指定的某个元素
Array.prototype.remove = function (val) {
  let index = this.indexOf(val)
  console.log(index)
  if (index > -1) {
    this.splice(index, 1)
  }
}
