/*
 * @Author: your name
 * @Date: 2021-03-04 17:05:53
 * @LastEditTime: 2021-03-04 17:07:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\common\utils.js
 */
// 节流
export function debounce(func, delay) {
  let timer = null;

  return function (...args) {
    // 频繁触发该函数，这里会一直重新clear计时器
    if (timer) {
      clearTimeout(timer)
    }
    // 当不再触发，delay毫秒后，就执行里面的函数
    timer = setTimeout(() => {
      // 这里的this指向 func
      func.apply(this, args)
    }, delay)
  }
}
