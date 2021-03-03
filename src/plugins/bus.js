/*
 * @Author: your name
 * @Date: 2021-03-03 17:37:25
 * @LastEditTime: 2021-03-03 17:37:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\plugins\bus.js
 */

import mitt from 'mitt'

const bus = {}

const emitter = mitt()

bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus