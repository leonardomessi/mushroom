import NavBar from 'components/common/navbar/NavBar';
<!--
 * @Author: your name
 * @Date: 2020-12-01 10:40:49
 * @LastEditTime: 2021-03-05 18:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\04-vue-router\02_tabbar\src\views\home\Home.vue
-->

<template>
  <div id="home">
    <nav-bar class="home_nav">
      <template v-slot:center>
        <img src="~assets/img/home/mushroom.svg" alt="" />
        蘑 菇 街
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlFake"
      class="tab-control"
      v-show="isTabShow"
    />
    <!-- BetterScroll封装 -->
    <!-- 加 : 传值，不加就默认字符串-->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 子组件发射事件，父组件接收 -->
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImgLoaded="swiperImgLoaded"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <!-- 吸顶选项栏 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <!-- 瀑布流布局 -->
      <!-- <goods-list :goods="showGoods"></goods-list> -->
      <water-fall ref="waterFall">
        <goods-list-water-fall :goods="showGoods" :page="goodsPage" />
      </water-fall>
    </scroll>
    <!-- 返回顶部 -->
    <!-- 组件无法直接监听点击事件 , 要添加 native:监听组件根元素的原生事件-->
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 子组件                   就不要用别名访问了
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

// 业务相关组件
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import GoodsListWaterFall from "components/content/waterfall/GoodsList";
import BackTop from "components/content/backTop/BackTop";

// 公共组件导入
import NavBar from "components/common/navbar/NavBar";
import WaterFall from "components/common/waterfall/WaterFall";
import Scroll from "components/common/scroll/Scroll";

// 函数导入
import { getHomeMultidata, getHomeGoods } from "network/home.js";

import { debounce } from "common/utils.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    GoodsListWaterFall,
    BackTop,
    NavBar,
    WaterFall,
    Scroll,
  },
  data() {
    // data里的变量属于组件，具有完整生存期
    // 里面数据到最后关闭网页才回收
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
      popPageY: 0,
      newPageY: 0,
      sellPageY: 0,
      curPageY: 0,
    };
  },
  // 组件创建完成
  // 赶紧发送网络请求获得数据
  // 然后渲染
  created() {
    // 1. 多个数据请求
    // 把请求逻辑放到 methods里，这里只写主要逻辑
    // 注意这里是methods的函数，不是导入的函数
    this.getHomeMultidata();

    // 2. 请求商品数据
    // 注意接口不能写错
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 组件挂载完成
  mounted() {
    // 等组件加载完了再开始，不然可能取不到 waterfall组件，无法执行

    // 1. 监听商品中图片加载完成
    const setImg = debounce(this.$refs.waterFall.setImgPos, 0); // 防抖包装
    this.$bus.$on("goodItemImageLoaded", () => {
      // 加载完成后让瀑布流组件来设置位置
      setImg();
    });
  },
  updated() {},
  unmounted() {},
  activated() {
    // 这里还是有bug，流行，新款，精选的滚动条是不一样的
    // 吸顶再次点击之后，应该要到对应的位置
    // 这里需要存储三个值
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    goodsPage() {
      return this.goods[this.currentType].page;
    },
  },
  methods: {
    /**
     * 事件监听相关
     */

    tabClick(index) {
      switch (index) {
        case 0:
          {
            this.currentType = "pop";
            this.curPageY = this.popPageY;
          }
          break;
        case 1:
          {
            this.currentType = "new";
            this.curPageY = this.newPageY;
          }
          break;
        case 2:
          {
            this.currentType = "sell";
            this.curPageY = this.sellPageY;
          }
          break;
      }
      // 跳转至对应页面该有的的位置
      this.$refs.scroll.scrollTo(0, this.curPageY, 0);
      this.$refs.tabControlFake.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backToTop() {
      // 通过组件访问，组件的方法
      this.$refs.scroll.scrollTo(0, 0, 300); // 传入毫秒数
    },
    contentScroll(position) {
      // 1. 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2. 决定tabControl是否吸顶（position: fixed）
      this.isTabShow = -position.y > this.tabOffsetTop;
      // 3. 存储curY
      if(this.currentType == "pop"){
        this.popPageY = position.y;
      }else if(this.currentType == "new"){
        this.newPageY = position.y;
      }else if(this.currentType == "sell"){
        this.sellPageY = position.y;
      }

    },

    loadMore() {
      // 这里直接获得新的一页
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.scroll.refresh();
    },
    swiperImgLoaded() {
      // tab-control组件offsetTop
      // 所有组件都有一个属性 $el: 获取组件里面的元素
      // 挂载完了也不代表图片加载了，可以是一堆没有图片撑起来的组件
      // 要等图片加载完
      console.log("swiperload");
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      this.popPageY = -this.tabOffsetTop;
      this.newPageY = -this.tabOffsetTop;
      this.sellPageY = -this.tabOffsetTop;
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      // getHomeMultidata()返回promise
      // 这里是异步请求
      getHomeMultidata().then((res) => {
        // 要保存数据（因为函数调用完，变量就没了）
        // this在箭头函数里往上找作用域，可以直接找到data里的result
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 二次封装请求
    getHomeGoods(type) {
      // 每次请求新的一页
      const page = this.goods[type].page + 1;
      // 这个里面的getHomeGoods是home.js里真正的请求函数
      getHomeGoods(type, page).then((res) => {
        // 数组push进保存的地方， 使用spread（解构赋值语法）
        this.goods[type].list.push(...res.data.list);
        // 当前页数加一
        this.goods[type].page += 1;

        // 结束一次上拉，才能进行下一次（大于一时才是上拉加载，）
        if (page > 1) {
          this.$refs.scroll.finishPullUp(); // 完成上拉加载更多
        }
      });
    },
  },
};
</script>

<style type="text/css" scoped>
#home {
  /* nav脱离文档流 */
  /* 需要padding-top撑开空间 */
  /* vh是设备高度 */
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
  background-color: rgb(224, 224, 224);
}

.home_nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 由于使用 bs，实现了局部滚动，就不用fixed了 */
  /* 固定在顶上，需要如下设置 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* 显示在顶上 */
  /* z-index: 9; */
}

.home_nav img {
  width: 20px;
  height: 20px;
  /* vertical 生效的前提是元素的 display：inline-block */
  vertical-align: middle;
}

/* 上面的scoped设置了作用域
    这里就不会选择到子组件同名内容 */
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
