<!--
 * @Author: your name
 * @Date: 2021-03-05 18:05:10
 * @LastEditTime: 2021-03-05 18:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\views\detail\childComps\DetailNavBar.vue
-->
<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="img-back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="item"
            class="title-item"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      // this.$router.go(-1);
      this.$router.back();
    }
  },
};
</script>

<style type="text/css" scoped>
.title {
  display: flex;
  font-size: 15px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.img-back {
  margin-top: 6%;
}

.img-back img{
  width: 30%;
}
</style>
