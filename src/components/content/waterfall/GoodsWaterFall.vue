import WaterFall from 'components/common/waterfall/WaterFall.vue';
<!--
 * @Author: your name
 * @Date: 2021-02-20 17:47:51
 * @LastEditTime: 2021-02-20 20:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\goods\GoodsWaterFall.vue
-->
<!-- 无用组件 -->
<template>
  <div class="goods">
    <water-fall v-for="item in goods" :key="item"
      :item-img="item.show.img"
      :item-item-desc="item.title"
      :item-info-one="item.price"
      :item-info-two="item.cfav"/>
  </div>
</template>

<script>

import WaterFall from "components/content/waterfall/WaterFall.vue"

export default {
  name: "GoodsWaterFall",
  components: {
    WaterFall
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
