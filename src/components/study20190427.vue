<template>
  <div class="study20190427">
    <h1>{{title}}</h1>
    <table :class="{isWidth:isWidth}" border="1">
      <thead>
      <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>姓别</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students">
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.age}}</td>
        <td>{{student.sex}}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <form>
      <input type="checkbox" v-model="selectType" value="java"> java
      <input type="checkbox" v-model="selectType" value="js"> js

      选择：<span v-for="selectItem in selectType">{{selectItem + "-"}}</span> &nbsp;
    </form>
    <hr>
  </div>
</template>

<script>
  export default {
    name: "study20190427",
    data() {
      return {
        title: "网络请求测试",
        // 学生数据集合
        students: [
          {id: "4", name: "tomcat", age: 19, sex: 1},
          {id: "5", name: "yellow", age: 16, sex: 1},
          {id: "6", name: "red", age: 15, sex: 0}
        ],
        // 选择类型
        selectType: [],
        // 类控制
        isWidth: true
      }
    },
    methods: {
      showPage: function () {

      }
    },
    mounted() {
      this.showPage();
    },
    // 页面创建完成
    created: function () {
      this.$http.get("./../static/students.json").then(function (res) {
        res.body.student.forEach(item => {
          this.students.push(item);
        })
      });
    }
  }
</script>

<style>
  .isWidth {
    width: 100%;
  }
</style>
