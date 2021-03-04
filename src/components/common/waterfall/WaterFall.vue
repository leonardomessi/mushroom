import GoodsList from 'components/content/goods/GoodsList';
<!--
 * @Author: your name
 * @Date: 2021-02-20 17:29:59
 * @LastEditTime: 2021-03-04 16:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\components\content\waterfall\WaterFall.vue
-->

<template>
  <div class="water-fall">
    <slot>
      <!-- 插入条件：需要一个大的盒子，里面装着所有小盒子
        小盒子是瀑布内容 -->
    </slot>
  </div>
</template>

<script>
export default {
  name: "WaterFall",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
    colNums: Number,
  },
  data() {
    return {
      isMouted: false,
      heightArr: []
    };
  },
  methods: {
    setImgPos() {
      console.log("setPos");
      // 注意，vue组件选取不是用tagname，而是classname
      // 这在css中也是一样
      let colNums = 2;
      let waterFall = document.querySelector(".water-fall");
      let boxItems = waterFall.firstElementChild.children;
      let boxItemsLen = boxItems.length;
      let heightArr = [];

      // style.width在css里不定义，获得的就是空字符串
      // offsetWidth可以直接获得
      let waterFallWidth = waterFall.offsetWidth;
      let boxWidth = boxItems[0].offsetWidth;
      let boxGap = (waterFallWidth - colNums * boxWidth) / (colNums + 1);

      // value of  |   key in  [key 的类型是 string，不是number]

      // 注意到我们这里的key从 0 开始
      // 然鹅每次刷新只需要排的是最后的 30 个（如果不是这样做累计多次，每次重排重新渲染需要时间会很长）
      // 要做到这样，我们发现，主要是拿不到上次排好的高度
      // 所以高度数组可以放在全局，使得每次调用都可以获得
      let key = 0;
      let item = null;
      for (; key < boxItemsLen; key++) {
        item = boxItems[key];
        // 1. 第一行定位设置
        if (key < colNums) {
          heightArr.push(item.offsetHeight);
          if ((key + 1) % colNums == 1) {
            item.style.left = boxGap + "px";
          } else {
            item.style.left = boxWidth + boxGap * (key + 1) + "px";
          }
        }
        // 2. 其他行定位
        else {
          // 水平定位
          let minIdx = this.getMinIdx(heightArr);
          // 当前的left 上一行最矮的那个
          item.style.left = boxItems[minIdx].offsetLeft + "px";
          item.style.top = heightArr[minIdx] + 10 + "px";
          heightArr[minIdx] += item.offsetHeight + 10;
        }
      }
      // 由于绝对定位，父元素waterfall塌缩，要设置一下高度，否则没有背景
      waterFall.style.height = Math.max(...heightArr) + "px";
    },
    // 找arr里最小数的下标
    getMinIdx(arr) {
      // call()，能够使用属于另一个对象的方法
      // [] 这里实际上就是new Arrar()
      return [].indexOf.call(arr, Math.min(...arr));
    },
  },
  mounted() {
    this.isMouted = true;
  },

};
</script>

<style type="text/css" scoped>
.water-fall {
  position: relative;
  text-align: center;
  background-color: rgb(224, 224, 224);
}
</style>
