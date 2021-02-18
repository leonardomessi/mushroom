/*
 * @Author: your name
 * @Date: 2018-12-31 10:40:58
 * @LastEditTime: 2021-02-17 22:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\07-axios\课堂代码\课堂代码\LearnVuejs09\01-learnaxios\src\network\request.js
 */

import axios from 'axios'

// export default 只能导出一个
// 所以用 export function

// 终极方案
export function request(config) {

  // 1. 创建 axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2. axios拦截器
  // (1) 请求拦截
  instance.interceptors.request.use(config => { // 请求成功
    console.log(config);
    // 为啥要拦截？
    // 1. 因为请求可能不符合要求
    // 2. 数据加密
    // 3. 请求的时候显示一个转圈圈动画
    // 4. 某些网络请求需要特殊信息（token）
    return config;  // 这里必须要返回，不然就发不出去了

  }, err => { // 请求失败
    console.log(err);
  });  


  // (2) 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res.data.data.recommend.list);
    return res.data;   // 这里必须要返回(可以只返回数据)，不然就收不到了
  }, err => {
    console.log(err);
  }); 

  // 3. 发送真正的网络请求
  // instance 本身就返回 promise对象，就直接 then catch了
  return instance(config)

}





