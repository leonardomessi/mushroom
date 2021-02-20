/*
 * @Author: your name
 * @Date: 2018-12-31 10:40:58
 * @LastEditTime: 2021-02-19 11:38:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\07-axios\课堂代码\课堂代码\LearnVuejs09\01-learnaxios\src\network\request.js
 */

import axios from 'axios'

export function request(config) {

  // 1. 创建 axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2. axios拦截器
  // (1) 请求拦截
  instance.interceptors.request.use(config => { 
    //console.log(config);
    return config;  
  }, err => { 
    console.log(err);
  });  

  // (2) 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data;   
  }, err => {
    console.log(err);
  }); 

  // 3. 发送真正的网络请求
  return instance(config)

}





