<!--
 * @Author: your name
 * @Date: 2021-02-01 19:51:18
 * @LastEditTime: 2021-02-17 16:15:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
  
  export default {
    name: 'app',
    components: {
      MainTabBar:  MainTabBar
    }
  }

</script>

<style>
  @import "./assets/css/base.css";
</style>
