<!--
 * @Author: your name
 * @Date: 2021-02-24 18:59:31
 * @LastEditTime: 2021-02-28 16:16:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\backTop\BackTop.vue
-->
<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
 export default {
   name: "BackTop",
   data () {
     return {}
   },
 }
</script>

<style type="text/css" scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
  }

  .back-top img{
    width: 43px;
    
  }
  
</style>
