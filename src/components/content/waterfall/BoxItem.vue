<!--
 * @Author: your name
 * @Date: 2021-02-20 17:30:32
 * @LastEditTime: 2021-02-20 21:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\waterfall\BoxItem.vue
-->

<template>
  <div class="box-item">
    <div class="item-img"><slot name="item-img"></slot></div>
    <div class="item-desc">
      <slot name="item-desc"></slot>
    </div>
    <div class="item-info-one">
      <slot name="item-info-one"></slot>
    </div>
    <div class="item-info-two">
      <slot name="item-info-two"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxItem",
  components: {
    
  },
  data () {
    return {}
  },
  methods: {
    
  },
}
</script>

<style type="text/css" scoped>




</style>
