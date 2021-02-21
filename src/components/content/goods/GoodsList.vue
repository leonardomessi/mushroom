<!--
 * @Author: your name
 * @Date: 2021-02-19 15:14:06
 * @LastEditTime: 2021-02-21 15:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\goods\GoodsList.vue
-->
<template>
  <div class="goods">
    <!-- ul>li{商品列表$}*10 -->
    <goods-list-item v-for="item in goods" :key="item"
      :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {},
}
</script>

<style type="text/css" scoped>

  .goods {
    display: flex;
    /* 不在一行显示 */
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1%;
  }

</style>
