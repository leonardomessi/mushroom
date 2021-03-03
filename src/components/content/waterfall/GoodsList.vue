import WaterFall from 'components/common/waterfall/WaterFall.vue';
<!--
 * @Author: your name
 * @Date: 2021-02-20 17:47:51
 * @LastEditTime: 2021-03-03 16:53:51
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
    },
    page:{
      type: Number,
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
      // 注意 children返回的不是数组，是一个HTMLCollection，无法使用数组的方法

      // 只设置最新的30个
      let i = goodsItem.length - 30;
      for(;i<goodsItem.length;i++){
        let item = goodsItem[i];

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
