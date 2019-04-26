<template>
  <div id="app">
    <study20190426 msg="这是从app.vue 传过来的"></study20190426>
  </div>
</template>

<script>
  // 声明一个组件
  import study20190426 from "./components/study20190426"

  export default {
    name: 'App',
    components: {
      study20190426
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
