<!--
 * @Author: your name
 * @Date: 2021-03-05 17:29:50
 * @LastEditTime: 2021-03-06 17:49:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

import {getDetail, Goods, Shop} from 'network/detail'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: {},
      topImages: [],
      goods: {}, // 不要设置成 null 不好转换Obj
      shop: {},
    };
  },
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2. 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 数据分离
      const data = res.result;
      // 1. 获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2. 获取基本商品信息 
      // 面向对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 3. 获取商店基本信息
      this.shop = new Shop(data.shopInfo);
      
      
    })
  },
};
</script>

<style type="text/css" scoped>

</style>
