<!--
 * @Author: your name
 * @Date: 2021-02-01 19:51:18
 * @LastEditTime: 2021-03-05 16:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\App.vue
-->
<template>
  <div id="app">
    <!-- 不让页面重新创建 -->

    <router-view v-slot="{ Component }">
      <keep-alive >
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar: MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
