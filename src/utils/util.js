/*
 * @Author: 王亮
 * @Date: 2019-01-17 09:23:16
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-17 10:24:35
 * @Description: 公共方法类库
 */

/**
 * @description: 格式化日期方法
 * @param date {Date} 传入的日期
 * @param format {string} 格式化规则
 * @return: {string} 返回已格式化时间字符
 */
export function pattern (date, format) {
  format = format || 'yyyy-MM-dd hh:mm:ss'
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(format)) {
    format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

/**
 * @description:截取字符串
 * @param str {string} 输入字符串
 * @param n {int} 截取长度
 * @param suffix {string} 多余代替字符
 * @return: {string} 返回截取的字符串
 */
export function stringStr (str, n, suffix) {
  suffix = suffix || ''
  if (str.replace(/[\u4e00-\u9fa5]/g, '**').length <= n) {
    return str
  } else {
    var len = 0
    var tmpStr = ''
    for (let i = 0; i < str.length; i++) { // 遍历字符串
      if (/[\u4e00-\u9fa5]/.test(str[i])) { // 中文 长度为两字节
        len += 2
      } else {
        len += 1
      }
      if (len > n) {
        break
      } else {
        tmpStr += str[i]
      }
    }
    return tmpStr + suffix
  }
}

/**
 * 字符长度（中文）
 * @params str {string} 输入字符串
 * return {int} 获取字符串长度
 */
export function strLen (str) {
  var len = 0
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}
