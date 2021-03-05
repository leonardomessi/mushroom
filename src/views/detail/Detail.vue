<!--
 * @Author: your name
 * @Date: 2021-03-05 17:29:50
 * @LastEditTime: 2021-03-05 18:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    // 取数据用 route
    this.iid = this.$route.params.iid;
  },
};
</script>

<style type="text/css" scoped></style>
