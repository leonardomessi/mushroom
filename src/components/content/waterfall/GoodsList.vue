import WaterFall from 'components/common/waterfall/WaterFall.vue';
<!--
 * @Author: your name
 * @Date: 2021-02-20 17:47:51
 * @LastEditTime: 2021-02-23 22:19:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\goods\GoodsWaterFall.vue
-->
<!-- 无用组件 -->
<template>
  <div class="goods">
    <goods-item v-for="item in goods" :key="item"
      :goods-item="item" />
  </div>
</template>

<script>

import GoodsItem from "./GoodsItem"

export default {
  name: "GoodsListWaterFall",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    setRandomHeight() {
      let goods = document.querySelector(".goods");
      // childNodes 它会把空的文本节点当成节点
      let goodsItem = goods.children;

      for (let item of goodsItem) {
        let itemImg = item.querySelector(".goods-img");
        let itemRandomH = this.randomInteger(200, 300);
        let imgRandomH = itemRandomH - 80;
        
        item.style.height = itemRandomH + "px";
        itemImg.style.height = imgRandomH + "px";
        itemImg.style.overflow = "hidden";
      }
    }
  },
  updated() {
    this.setRandomHeight();
  },
}
</script>

<style type="text/css" scoped>
</style>
