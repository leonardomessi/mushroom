import NavBar from 'components/common/navbar/NavBar';
<!--
 * @Author: your name
 * @Date: 2020-12-01 10:40:49
 * @LastEditTime: 2021-02-18 22:46:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\04-vue-router\02_tabbar\src\views\home\Home.vue
-->

<template>
  <div id="home">
    <nav-bar class="home_nav">
      <template v-slot:center>
        蘑 菇 街
      </template>
    </nav-bar>
    <!-- 把轮播图二次封装 -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <!-- ul>li{列表}*100 -->
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>

  </div>
</template>

<script>

// 子组件                   就不要用别名访问了
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

// 公共组件导入
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';

// 函数导入
import { getHomeMultidata } from 'network/home.js';

export default {
  name: "Home",
  components: { 
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  // 组件创建完成
  // 赶紧发送网络请求获得数据
  // 然后渲染
  data () {
    // data里的变量属于组件，具有完整生存期
    // 里面数据到最后关闭网页才回收
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1. 多个数据请求
    // getHomeMultidata()返回promise
    // 这里是异步请求
    getHomeMultidata().then(res => {
      // 要保存数据（因为函数调用完，变量就没了）
      // this在箭头函数里往上找作用域，可以直接找到data里的result
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
  methods: {
    printData() {
      console.log(banners);
    }
  }
}
</script>

<style type="text/css" scoped>
  #home {
    /* nav脱离文档流 */
    /* 需要padding-top撑开空间 */
    padding-top: 44px;
  }

  .home_nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 固定在顶上，需要如下设置 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /* 显示在顶上 */
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>

