import { ScopedSlot } from '../../../../../../../vue-2.6.12/vue-2.6.12/types/vnode';
<!--
 * @Author: your name
 * @Date: 2021-02-17 16:06:24
 * @LastEditTime: 2021-02-17 20:56:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\common\navbar\NavBar.vue
-->
<template>
  <!-- 这里不能使用 id -->
  <!-- 因为 navbar 可能会有多个 -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {}
  },
  methods: {},
}
</script>

<style type="text/css" scoped>
  /* 组件封装的样式要是通用的 */
  .nav-bar {
    display: flex;
    /* height撑起 */
    height: 44px;
    /* line-height 要内容 */
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
  }
  .left,.right {
    width: 60px;

  }
  .center {
    /* 占据剩余全部 */
    flex: 1;

  }
</style>
