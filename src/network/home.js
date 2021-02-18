/*
 * @Author: your name
 * @Date: 2021-02-17 17:11:14
 * @LastEditTime: 2021-02-17 17:26:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\network\home.js
 */
import {request} from "./request";

// 首页的多个请求做统一管理
// 不用放在 vue文件里面

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}