
<!--
 * @Author: your name
 * @Date: 2021-02-19 15:16:13
 * @LastEditTime: 2021-02-23 20:04:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods-item">
    <div class="goods-img">
      <img :src="goodsItem.show.img" alt="">
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
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style type="text/css" scoped>
  .goods-item {
    padding-bottom: 0;
    margin-top: 10px;
    position: relative;
    background-color: #fff;
    /* flex要均分，需要固定宽度 */
    width: 47%;
    border-radius: 10px;
    overflow: hidden;
  }

  /* 再在img外面套一层，就可以裁剪图片大小了 */
  .goods-img {
    height: 70%;
    /* 多余裁切 */
    overflow: hidden;
  }

  .goods-img img {
    width: 100%; 
    overflow:hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding: 0 10px;
    overflow: hidden;
    font-size: 14px;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    /* 规定段落中的文本不进行换行 */
    /* white-space: nowrap; */
    /* 规定段落中的超出两行省略*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    margin-bottom: 10%;
  }

  .goods-info .price {
    float: left;
    color: var(--color-high-text);
  }

  .goods-info .collect {
    float: right;
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
