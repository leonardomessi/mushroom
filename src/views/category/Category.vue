<!--
 * @Author: your name
 * @Date: 2020-12-01 10:41:32
 * @LastEditTime: 2021-02-28 16:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\04-vue-router\02_tabbar\src\views\category\Category.vue
-->
<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
      <li>分类列表21</li>
      <li>分类列表22</li>
      <li>分类列表23</li>
      <li>分类列表24</li>
      <li>分类列表25</li>
      <li>分类列表26</li>
      <li>分类列表27</li>
      <li>分类列表28</li>
      <li>分类列表29</li>
      <li>分类列表30</li>
      <li>分类列表31</li>
      <li>分类列表32</li>
      <li>分类列表33</li>
      <li>分类列表34</li>
      <li>分类列表35</li>
      <li>分类列表36</li>
      <li>分类列表37</li>
      <li>分类列表38</li>
      <li>分类列表39</li>
      <li>分类列表40</li>
      <li>分类列表41</li>
      <li>分类列表42</li>
      <li>分类列表43</li>
      <li>分类列表44</li>
      <li>分类列表45</li>
      <li>分类列表46</li>
      <li>分类列表47</li>
      <li>分类列表48</li>
      <li>分类列表49</li>
      <li>分类列表50</li>
      <li>分类列表51</li>
      <li>分类列表52</li>
      <li>分类列表53</li>
      <li>分类列表54</li>
      <li>分类列表55</li>
      <li>分类列表56</li>
      <li>分类列表57</li>
      <li>分类列表58</li>
      <li>分类列表59</li>
      <li>分类列表60</li>

    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    naem: "Category",
    // 注意：created 组件创建完调用 
    // 此时页面没有内容！！！
    created() {
      
      // console.log(document.querySelector('.wrapper')); // null
      // new BScroll('.wrapper', {
      // })
    },
    // mouted 才挂载好html 
    mounted() {
      console.log(document.querySelector('.wrapper'))
      console.log(this.$refs.wrapper);
      let bscroll = new BScroll('.wrapper', {
        probeType: 3,
        pullUpLoad: true
      })


      bscroll.on('pullingUp', () => {
        setTimeout(() => {
          console.log('上拉加载更多');
          bscroll.finishPullUp()
        },2000)
      })
    },
    data () {
      return {
        
      }
    },
    methods: {},
  }
</script>

<style type="text/css" scoped>
  .wrapper {
    height: 200px;
    background-color: lightblue;
    /* 局部滚动 */
    overflow: hidden; 
  }

</style>
