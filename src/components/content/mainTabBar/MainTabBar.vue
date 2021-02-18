<!--
 * @Author: your name
 * @Date: 2020-12-01 11:27:37
 * @LastEditTime: 2021-02-17 16:08:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\04-vue-router\02_tabbar\src\components\MainTabBar.vue
-->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <template v-slot:item-icon>
        <img :src="pic_home" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img :src="pic_home_active" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="green">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="skyblue">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="pink">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// components import
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

// images import
import pic_home from "assets/img/tabbar/home.svg"
import pic_home_active from "assets/img/tabbar/home_active.svg"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      pic_home: pic_home,
      pic_home_active: pic_home_active
    };
  },
  methods: {},
};
</script>

<style type="text/css" scoped>
   /*在主选项卡中定义内容样式*/
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }


</style>
