// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入http请求
import VueResourse from 'vue-resource'
// 引入路由
import VueRouter from 'vue-router'
// 路由界面
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResourse)
Vue.use(VueRouter);


// 自定义指令 全局
Vue.directive("h2Color", {
  bind(el, binding, vnode) {
    el.style.color = "red";
  }
})

Vue.directive("weight", {
  bind(el, binding, vnode) {
    if (binding.value == "true") {
      // 表示当前使用钩子函数的元素的值为true
      el.style.fontSize = "50px";
    }
    // 钩子函数定义 背景颜色定义
    if (binding.arg == "background") {
      el.style.background = "gray";
    }
  }
})

// 创建一个路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router
})
