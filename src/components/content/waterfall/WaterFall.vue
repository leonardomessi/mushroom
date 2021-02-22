<!--
 * @Author: your name
 * @Date: 2021-02-20 17:29:59
 * @LastEditTime: 2021-02-22 15:31:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\waterfall\WaterFall.vue
-->

<template>
  <div class="water-fall">
    <!-- <el-button class="test-btn" icon="el-icon-edit" type="success" 
      @click="setImgPos()"> 
      模块测试按钮 
    </el-button> -->
    <box-item v-for="item in goods" :key="item">
      <!-- 具名插槽简写 -->
      <template #item-img>
        <div class="item-img">
          <img :src="item.show.img" class="image" />
        </div>
      </template>
      <template #item-desc>
        <div class="item-desc">
          <p>{{ item.title }}</p>
          <span class="price">￥{{ item.price }}</span>
          <span class="collect">{{ item.cfav }}</span>
        </div>
      </template>
    </box-item>

  </div>
</template>

<script>
import BoxItem from "components/content/waterfall/BoxItem.vue";
export default {
  name: "WaterFall",
  components: {
    BoxItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    setImgPos() {
      // 注意，vue组件选取不是用tagname，而是classname
      // 这在css中也是一样
      let colNums = 2;
      let waterFall = document.querySelector(".water-fall");
      let boxItems = document.getElementsByClassName("box-item");
      let boxItemsLen = boxItems.length;
      let heightArr = [];

      // style.width在css里不定义，获得的就是空字符串
      // offsetWidth可以直接获得
      let waterFallWidth = waterFall.offsetWidth;
      let boxWidth = boxItems[0].offsetWidth;
      let boxGap = ((waterFallWidth - (colNums*boxWidth))/(colNums + 1));

      console.log(boxItems[0].parentNode); // 还是waterfall ，塌缩了 

      // value of  |   key in
      // key 的类型是 string，不是number
      for (let key = 0, item; key < boxItemsLen; key++) {
        item = boxItems[key];
        // 1. 第一行定位设置
        if (key < colNums) {
          heightArr.push(item.offsetHeight);
          if ((key + 1) % colNums == 1) {
            item.style.left = boxGap + "px";
          } else {
            item.style.left = boxWidth + boxGap * (key+1) +"px";
          }
        }
        // 2. 其他行定位
        else {
          // 水平定位
          let minIdx = this.getMinIdx(heightArr);
          // 当前的left 上一行最矮的那个
          item.style.left = boxItems[minIdx].offsetLeft + 'px';
          item.style.top = (heightArr[minIdx] + 10) + 'px';
          heightArr[minIdx] += item.offsetHeight + 10;
        }
      }
      // 由于绝对定位，父元素waterfall塌缩，要设置一下高度，否则没有背景
      waterFall.style.height = Math.max(...heightArr) + "px";
    },
    randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    setRandomHeight() {
      let boxItems = document.getElementsByClassName("box-item");

      for (let item of boxItems) {
        let itemImg = item.querySelector(".item-img");
        let itemRandomH = this.randomInteger(200, 300);
        let imgRandomH = itemRandomH - 80;

        item.style.height = itemRandomH + "px";
        itemImg.style.height = imgRandomH + "px";
        itemImg.style.overflow = "hidden";
      }
    },
    // 找arr里最小数的下标
    getMinIdx(arr) {
      // call()，能够使用属于另一个对象的方法
      // [] 这里实际上就是new Arrar()
      return [].indexOf.call(arr, Math.min(...arr));
    }
  },
  // dom刷新后调用
  updated() {
    this.setRandomHeight();
    this.setImgPos();
  },
};
</script>

<style type="text/css" scoped>
.water-fall {
  position: relative;
  text-align:center;
  background-color: rgb(224, 224, 224);
}

.test-btn {
  margin-top: 10px;
}

.box-item {
  position: absolute;
  padding-bottom: 0;
  margin-top: 10px;
  width: 47%;

  background-color: #fff;

  /* height: 300px; */
  border-radius: 5px;
  overflow: hidden;
}

.box-item img {
  display: block;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.box-item .item-desc {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  padding: 0 10px;
  overflow: hidden;
  font-size: 15px;
  text-align: center;
}

.box-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  /* 规定段落中的超出两行省略*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  margin-bottom: 9%;
}

.box-item .price {
  font-size: 17px;
  float: left;
  color: var(--color-high-text);
}

.box-item .collect {
  float: right;
  position: relative;
}

.box-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
