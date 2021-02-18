<!--
 * @Author: your name
 * @Date: 2021-02-17 22:49:52
 * @LastEditTime: 2021-02-18 20:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data () {
    return {}
  },
  methods: {},
  props: {
    // 父传子
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style type="text/css" scoped>
  .recommend {
    /* flex布局 */
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-top: 8px solid #eee;
    border-bottom: 8px solid rgb(241, 241, 241);
  }

  .recommend-item {
    text-align: center;
    flex: 1;
  }

  .recommend-item img {
    border: 4px solid rgb(253, 171, 171);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }


</style>
