import { Swiper } from 'components/common/swiper';
<!--
 * @Author: your name
 * @Date: 2021-03-05 19:13:33
 * @LastEditTime: 2021-03-06 16:51:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\detail\childComps\DetailSwiper.vue
-->
<template>
  <!-- 注意这里不能再套一层，不然无法使用swiper -->
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item" class="swiper-item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
  
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style type="text/css" scoped>
.detail-swiper {
  /* 这里其实不需要定高度 */
  /* 服务器请求的图片应该大小固定 */
  height: 400px;
  overflow: hidden;
}
.swiper-item img{
  width: 100%;
}
</style>
