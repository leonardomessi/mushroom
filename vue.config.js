/*
 * @Author: your name
 * @Date: 2021-02-17 10:19:18
 * @LastEditTime: 2021-02-21 17:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\vue.config.js
 */
module.exports = {
    configureWebpack: {
        resolve: {
            // 配置别名
            // 内部已经配置过 @就是src
            alias: {
                // 别名    路径
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',

                // 'router': 'router',
                // 'store': 'store',
                // 用下面两个可以直接取到
                // this.$router
                // this.$store
            }
        }
    }
}