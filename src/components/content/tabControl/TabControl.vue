<!--
 * @Author: your name
 * @Date: 2021-02-18 21:05:11
 * @LastEditTime: 2021-02-22 17:46:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
    <!-- 不使用slot，因为样式都一样，只有文字不一样 -->
    <!-- 使用slot是因为：插入的东西可能完全不是一种标签 -->

    <!-- 点击事件要传出去 -->
    <div v-for="(item,index) in titles" :key="item" 
      class="tab-control-item" :class="{active: index === currentIndex}"
      @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 子传父，抛出一个值
      this.$emit('tabClick', index);
    },
  },
}
</script>

<style type="text/css" scoped>

  .tab-control {
    display: flex;
    font-size: 15px;
    /* 防止透明 */
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    /* 垂直居中 */
    line-height: 40px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span{
    padding: 6px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
