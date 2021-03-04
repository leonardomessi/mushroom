<!--
 * @Author: your name
 * @Date: 2021-02-17 21:41:30
 * @LastEditTime: 2021-03-04 18:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\home\childComps\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isImgLoad: false,
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImgLoaded() {
        if(!this.isImgLoad){
          this.$emit("swiperImgLoaded");
          this.isImgLoad = true;
        }
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
