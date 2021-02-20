<!--
 * @Author: your name
 * @Date: 2021-02-20 17:29:59
 * @LastEditTime: 2021-02-20 23:12:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\waterfall\WaterFall.vue
-->

<template>
  <div class="water-fall">
    <button @click="printImg()">撒旦发个撒旦给</button>
    <box-item v-for="item in goods" :key="item">
      <!-- 具名插槽简写 -->
      <template #item-img >
        <div class="item-img">
          <img :src="item.show.img" class="image">
        </div>
      </template>
      <template #item-desc>
        <p>{{item.title}}</p>
      </template>
      <template #item-info-one>
        <span class="price">￥{{item.price}}</span>
      </template>
      <template #item-info-two>
        <span class="collect">{{item.cfav}}</span>
      </template>
    </box-item>
  </div>
</template>

<script>
import BoxItem from "components/content/waterfall/BoxItem.vue"
export default {
  name: "WaterFall",
  components: {
    BoxItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      _hightArr: [],

    }
  },  
  methods: {
    printImg() {
      console.log(this.goods[0]);
      for(let item of this.goods) {
        console.log(item);
      }
    }
  },
  mounted() {

  },
}
</script>

<style type="text/css" scoped>
  .box-item {
    padding-bottom: 0;
    margin-top: 10px;
    position: relative;
    background-color: #fff;
    /* flex要均分，需要固定宽度 */
    width: 47%;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
  }

  .item-img {
    /* 随机给一个高度 */
    height: 200px;
    overflow: hidden;
  }
  .box-item img {
    width: 100%; 
    overflow:hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }




</style>
