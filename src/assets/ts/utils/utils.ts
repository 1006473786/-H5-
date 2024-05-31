
/**
 * 公共方法
 */

/**
 * 构造数组
 * @n { 传入数字 }
 */
export const createArr = (n: number) => Array.from(new Array(n), (_v, i) => i)

/**
 * 数组随机排序
 * @param arr { 传入数组 }
 */
export const randomSort = (arr: Array<number>) => { return arr.sort(() => Math.random() - 0.5) }

/**
 * 数组去重
 * @param arr { 传入数组 }
 * @returns 
 */
export const removeDuplicates = (arr: Array<number>) => [...new Set(arr)]

/**
 * 数组根据唯一值去重
 * @param arr {传入对象数组}
 * @returns 
 */
export const duplicateById = (arr: Array<any>) => [...arr.reduce((prev, cur) => prev.set(cur.id, cur), new Map()).values()]

/**
 * 多个数组取交集
 * @param a 参数均为数组
 * @param arr 
 * @returns 
 */
export const intersection = (a: Array<number>, ...arr: Array<number[]>) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)))

/**
 * 查找数组最大值索引
 * @param arr 参数为数组
 * @returns 返回最大值索引
 */
export const indexOfMax = (arr: []) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0)

/**
 * 查找数组最小值索引
 * @param arr 参数为数组
 * @returns 返回最小值索引
 */
export const indexOfMin = (arr: []) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0)

/**
 * 查找数组中与给定值最接近的值
 * @param arr 参数为数组
 * @param n 参数为数字
 * @returns 返回数字
 */
export const closest = (arr: [], n: number) => arr.reduce((prev, curr) => (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev))

/**
 * 压缩多个数组
 * @param arr 参数为数组
 * @returns 返回数组
 */
export const zipArr = (...arr: Array<any>) => Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) => arr.map((a) => a[i]))

/**
 * 矩阵交换行和列
 * @param matrix 参数为多维数组
 * @returns 返回多维数组
 */
export const transpose = (matrix: Array<any[]>) => matrix[0].map((_col, i) => matrix.map((row) => row[i]))

/**
 * 进制转换 --- 10进制 => n进制
 * @param num 数字
 * @param n 数字
 * @returns 数字
 */
export const toDecimal = (num: number, n: number) => num.toString(n)

/**
 * 进制转换 --- n进制 => 10进制
 * @param num 数字
 * @param n 数字
 * @returns 数字
 */
export const toDecimalism = (num: number, n: number) => parseInt(String(num), n)

/**
 * 手机号格式化
 * @param str 字符串
 * @param sign 字符串
 * @returns 字符串
 */
export const formatPhone = (str: string, sign = '-') => str.replace(/(\W|\s)/g, "").split(/^(\d{3})(\d{4})(\d{4})$/).filter(item => item).join(sign)

/**
 * 多个空格合并为一个空格
 * @param str 字符串
 * @returns 字符串
 */
export const clearwhiteSpace = (str: string) => str.replace(/\s\s+/g, ' ')

/**
 * 重新加载当前页面
 * @returns 
 */
export const reload = () => location.reload()

/**
 * 页面返回顶部
 * @returns 
 */
export const goTop = () => window.scrollTo(0, 0)

/**
 * 元素滚动到可视区域起点
 * @param element 元素
 * @returns 
 */
export const scrollTop = (element: Element) => element.scrollIntoView({ behavior: 'smooth', block: 'start' })

/**
 * 元素滚动到可视区域终点
 * @param element 元素
 * @returns 
 */
export const scrollEnd = (element: Element) => element.scrollIntoView({ behavior: 'smooth', block: 'end' })

/**
 * 检查是否是IE浏览器
 */
export const isIE = !!document.DOCUMENT_NODE;

/**
 * html元素中过滤所有标签
 * @param html html元素
 * @returns 字符串
 */
export const stripHtml = (html: any) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

/**
 * 重定向
 * @param url 字符串
 */
export const goto = (url: string) => { location.href = url };

/**
 * 文本粘贴
 * @param text 字符串
 * @returns 
 */
export const copy = (text: string) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text)

/**
 * 判断是否是今天
 * @param date 
 * @returns true/false
 */
export const isToday = (date: Date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)

/**
 * 日期格式转换
 * @param date 
 * @returns YYY-MM-DD
 */
export const formatYmd = (date: Date) => date.toISOString().slice(0, 10)

/**
 * 秒数转换
 * @param s 秒数
 * @returns hh:mm:ss时间
 */
export const formatSeconds = (s: number) => new Date(s * 1000).toISOString().substring(11, 8)

/**
 * 获取某年某月的第一天
 * @param d 日期
 * @returns 日期
 */
export const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1)

/**
 * 获取某年某月的最后一天
 * @param d 日期
 * @returns 日期
 */
export const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0)

/**
 * 获取某年某月的天数
 * @param year 
 * @param month 
 * @returns number
 */
export const getDaysNum = (year: number, month: number) => new Date(year, month, 0).getDate()

/**
 * 判断函数是否是异步函数
 * @param v 函数
 * @returns true/false
 */
export const isAsyncFun = (v: Function) => Object.prototype.toString.call(v) === '[object AsyncFunction]'

/**
 * 截断数字
 * @param n 数字
 * @param fixed 数字
 * @returns 数字
 */
export const toFixed = (n: any, fixed: number) => n.match(new RegExp(`^-?\d+(?:.\d{0,${fixed}})?`))[0]

/**
 * 截取数字并四舍五入
 * @param n 
 * @param decimals 
 * @returns 
 */
// export const round = (n:any, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
export const round = (n: number, decimals = 0) => {
    const roundedValue = Math.round(n * 10 ** decimals);
    return roundedValue / 10 ** decimals;
}

/**
 * 补零操作
 * @param num 
 * @param len 
 * @param zero 
 * @returns 
 */
export const replenishZero = (num: number, len: number, zero = 0) => num.toString().padStart(len, zero.toString())

/**
 * 删除对象的无效属性
 * @param obj 
 * @returns 对象
 */
export const removeNullUndefined = (obj: object) => Object.entries(obj).reduce((a: any, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

/**
 * 交换对象的键值
 * @param obj 
 * @returns object
 */
export const invert = (obj: any) => Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {})

/**
 * 字符串转换为对象
 * @param str 
 * @returns object
 */
export const strParse = (str: string) => JSON.parse(str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/\'/g, "\""))

/**
 * 比较两个对象是否相等
 * @param objects 
 * @returns true/fasle
 */
export const objectisEqual = (...objects: Array<object>) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

/**
 * 随机生成一个颜色
 * @returns 
 */
export const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

/**
 * 将16进制颜色转换为rgb
 * @param hex 
 * @returns 
 */
export const hexToRgb = (hex: any) => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_: any, r: any, g: any, b: any) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map((x: any) => parseInt(x, 16));

/**
 * 获取一个随机的ip地址
 * @returns 
 */
export const radomIP = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

/**
 * 将cookie转换为对象
 * @returns 
 */
export const getCookie = () => document.cookie.split(';').map((item) => item.split('=')).reduce((acc: any, [k, v]) => (acc[k.trim().replace('"', '')] = v) && acc, {})

/**
 * 强制等待
 * @param t number 
 * @returns 
 */
export const sleep = async (t: number) => new Promise((resolve) => setTimeout(resolve, t));
/**
 * 生成几个汉字
 * @param t number 
 * @returns 
 */
// 生僻字范围Math.random() * (40870 - 19968) + 19968
// 所有汉字 19968-40869
// export const radomChineseNum = (num: number) => (() => {
export const radomChineseNum = () => {
    var num = Math.floor(Math.random() * 20) + 1;
    var _rsl = '';
    for (var i = 0; i <= num; i++) {
        var _randomUniCode = Math.floor(
            Math.random() * (40870 - 19968) + 19968
        ).toString(16);
        _rsl = _rsl + eval("_rsl=" + '"\\u' + _randomUniCode + '"');
    }
    return _rsl;
}

// 字符串一个个出现

export const printOneByOne=(text:string, delay:number)=>{
    var reTxt:any
    var i = 0;
    function print() {
      if (i < text.length) {
        console.log(text.charAt(i));
        i++;
        reTxt.push(text.charAt(i))
        setTimeout(print, delay);
      }
    }
    print();
    return reTxt
}


   
//   // 调用示例
//   printOneByOne("Hello, World!", 100);