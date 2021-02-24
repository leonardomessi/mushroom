
<!--
 * @Author: your name
 * @Date: 2019-01-13 00:10:09
 * @LastEditTime: 2021-02-23 20:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\04-vue-router\02_tabbar\src\components\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 插槽到时候是直接复制过来, 属性都没了 -->
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="item-icon-active" ></slot></div>
    <div :style="activeStyle"><slot name="item-text" ></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    // 父传子
    props: {
      path: String ,
      activeColor: {
        type: String,
        default: 'red',
      } 
    },
    computed: {
      isActive() {
        //       当前活跃路由
        return this.$route.path.indexOf(this.path) !==-1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      },
    },
    methods: {
      itemClick() {
        this.$router.push(this.path).catch(err => err);
      }
    },
  }
</script>

<style scoped>
  /* 为什么子组件里定义插槽内元素样式无法生效？？？ */
  /* 在这里只要定义大的容器的样式，
    slot传进来的元素的样式是无法在这里改变的 */
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }


</style>
