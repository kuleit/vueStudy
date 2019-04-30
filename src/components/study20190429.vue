<template>
  <div class="study20190429">
    <h1>{{title}}</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">第一天</router-link>
        </li>
        <li>
          <router-link to="/one">第二天</router-link>
        </li>
        <li>
          <router-link to="/tow">第三天</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "study20190429",
    data() {
      return {
        title: "自定义路由",
        id: 1
      }
    }
  }
</script>

<style scoped>

</style>
