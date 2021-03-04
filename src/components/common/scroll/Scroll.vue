<!--
 * @Author: your name
 * @Date: 2021-02-23 19:37:10
 * @LastEditTime: 2021-03-03 19:39:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\common\scroll\Scroll.vue
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    // probeType
    // 为 0，在任何时候都不派发 scroll 事件，
    // 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
    // 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
    // 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画  性能差一点
    probeType: {
      type: Number,
      default: 0,
    },
    // 同样，不是所有都要pullUpLoad，这里还是用变量指定
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "哈哈哈",
    };
  },
  mounted() {


    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,  // 控制内部是否能被点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      bounce: {
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      observeDOM: true,
      observeImage: true
    });

    // 2. 监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // 3. 监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });


  },
  methods: {
    // 直接来到x, y这个位置
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped></style>
