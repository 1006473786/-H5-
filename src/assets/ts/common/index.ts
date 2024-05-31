// 防抖
/*函数节流（时间差）：如果interval不传，则默认300ms*/
// function throttle(fn: any, interval: number) {
//     var enterTime = 0;//触发的时间
//     var gapTime = interval || 300;//间隔时间，如果interval不传，则默认300ms
//     return function () {
//         var context= this as object,
//         var backTime: any = new Date();//第一次函数return即触发的时间
//         if (backTime - enterTime > gapTime) {
//             fn.call(context, arguments);
//             enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
//         }
//     };
// }
function debounce(fn: Function, time: number) {
    let timer: any
    return function(this: object, ...args: any[]) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
        clearTimeout(timer)
      }, time)
    }
  }

// /*函数防抖（定时器）：如果interval不传，则默认1000ms*/
// function debounce(fn: any, interval: number) {
//     var timer: any;
//     var gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
//     return function () {
//         clearTimeout(timer);
//         var context = this;
//         var args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
//         timer = setTimeout(function () {
//             fn.call(context, args);
//         }, gapTime);
//     };
// }

const add = function (n: number) {
    return n += 1
}
module.exports = {
    // throttle,
    // debounce
    add
}