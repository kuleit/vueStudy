<template>
  <div id="app">
    <!--第一天的学习 基本的语法-->
    <!--<study20190426 msg="这是从app.vue 传过来的"></study20190426>-->
    <!--第二天的学习 基本的数据请求 使用json-server -->
    <!--<study20190427></study20190427>-->
    <!--钩子函数 自定义函数 搜索拦截器 全局拦截器 和局部拦截器 -->
    <!--<study20190428></study20190428>-->
    <study20190429></study20190429>
    <!--显示跳转的页面-->
    <router-view></router-view>
  </div>
</template>

<script>
  // 声明组件
  import study20190426 from "./components/study20190426"
  import study20190427 from "./components/study20190427"
  import study20190428 from "./components/study20190428"
  import study20190429 from './components/study20190429'

  export default {
    name: 'App',
    components: {
      study20190426,
      study20190427,
      study20190428,
      study20190429
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
