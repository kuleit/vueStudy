<template>
  <div class="study20190428">
    <!--钩子函数定义-->
    <h1>{{title}}</h1>
    <h2 v-h2Color>{{h2Title}}</h2>
    <h2 v-weight:background="'true'">{{h2TitleOne}}</h2>
    <!--拦截器使用 查询 -->

    <div>
      <span>查询: <input type="text" class="search" placeholder="请输入你要查询的姓名" v-model="search"></span>
    </div>
    <table id="table" border="1">
      <thead>
      <tr>
        <td>编号</td>
        <td>名称</td>
        <td>年龄</td>
        <td>姓别</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in filterStudents">
        <td v-text="student.id"></td>
        <td v-text="student.name"></td>
        <td v-text="student.age"></td>
        <td v-text="student.sex"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "study20190428",
    data() {
      return {
        title: "钩子函数、拦截器使用",
        h2Title: "钩子函数定义 颜色变化",
        h2TitleOne: "钩子函数参数定义 字体加大",
        // 学生数据
        students: [],
        // 数据查询
        search: "",
        // 从地址栏上获取ID
        // id: this.$router.params.id
      }
    },
    created: function () {
      this.$http.get("./../static/students.json").then(function (res) {
        // 条件成立
        if (res.status == "200") {
          this.students = res.body.student;
        }
      });
    },
    computed: {
      filterStudents: function () {
        return this.students.filter(student => {
          return student.name.match(this.search);
        })
      }
    }
  }
</script>

<style scoped>
  #table {
    width: 100%;
  }
</style>
