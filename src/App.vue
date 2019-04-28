<template>
  <div id="app">
    <!--第一天的学习 基本的语法-->
    <study20190426 msg="这是从app.vue 传过来的"></study20190426>
    <!--第二天的学习 基本的数据请求 使用json-server -->
    <study20190427></study20190427>
  </div>
</template>

<script>
  // 声明组件
  import study20190426 from "./components/study20190426"
  import study20190427 from "./components/study20190427"

  export default {
    name: 'App',
    components: {
      study20190426,
      study20190427
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
