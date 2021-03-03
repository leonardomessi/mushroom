<!--
 * @Author: your name
 * @Date: 2021-02-20 17:30:32
 * @LastEditTime: 2021-03-03 17:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\waterfall\BoxItem.vue
-->

<template>
  <div class="goods-item">
    <div class="goods-img">
      <!-- 监听图片加载 -->
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    </div>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 通知祖父Home来调用 water-fall的setImg方法
    // 1. 两层传递 GoodsItem -> GooodsList -> Home
    // 2. 使用 Vuex 中间通信
    //    设置属性，实时改变
    
    // 3. 事件总线

    imageLoad() {
      this.$bus.$emit('goodItemImageLoaded')
    } 
  },
}
</script>

<style type="text/css" scoped>


.goods-item {
  position: absolute;
  padding-bottom: 0;
  margin-top: 10px;
  width: 47%;

  background-color: #fff;

  /* height: 300px; */
  border-radius: 5px;
  overflow: hidden;
}



.goods-item img {
  display: block;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.goods-item .goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  padding: 0 10px;
  overflow: hidden;
  font-size: 15px;
  text-align: center;
}

.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  /* 规定段落中的超出两行省略*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  margin-bottom: 9%;
}

.goods-item .price {
  font-size: 17px;
  float: left;
  color: var(--color-high-text);
}

.goods-item .collect {
  float: right;
  position: relative;
}

.goods-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
