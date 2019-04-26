<template>
  <div class="study20190426">
    <!--获取数据-->
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>

    <!-- v-if -->
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else="showName">{{user.lastName}}</p>

    <!-- v-for -->
    <ul>
      <li v-for="item in items">{{item.username}} : {{item.userAge}}</li>
    </ul>

    <!-- v-on -->
    <button v-on:click="showAlert()">showAlert</button>
    <br>
    <!-- 键盘事件 -->
    <input type="text" placeholder="请输入内容 Enter" v-on:keyup="inputKeyup" v-on:keyup.enter="inputKeyupEnter">
    <input type="text" placeholder="Alt + Enter" v-on:keyup.alt.enter="inputKeyupAltEnter">
    <hr>
    <label>FirstName:</label>
    <input type="text" v-model="user.firstName">
    <label>LastName:</label>
    <input type="text" v-model="user.lastName">
    <br>
    <p>{{fullName}}</p>

    <!--props-->
    <h2>{{msg}}</h2>

    <hr>
    <h2>{{usersTitle}}</h2>
    <form v-on:submit="userSubmit">
      <label for="id">id:</label><input id="id" type="text" placeholder="请输入姓名" v-model="newUsers.id">
      <label for="name">name:</label><input id="name" type="text" placeholder="请输入姓名" v-model="newUsers.name">
      <label for="age">age:</label><input id="age" type="text" placeholder="请输入年龄" v-model="newUsers.age">
      <label for="sex">sex:</label><input id="sex" type="text" placeholder="请输入姓别" v-model="newUsers.sex">
      <button type="submit">提交</button>
    </form>
    <br>
    <table id="tableUsers" border="1">
      <thead>
      <tr>
        <td>选择</td>
        <td>编号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>姓别</td>
        <td>删除</td>
      </tr>
      </thead>
      <tbody>
      <tr :class="{contacted:user.contacted}" v-for="user in users">
        <td><input type="checkbox" v-model="user.contacted"></td>
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.sex}}</td>
        <td>
          <button v-on:click="deleteUser(user)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "study20190426",
    props: {
      msg: {
        type: String,
        default: "这个值是传过来的.."
      }
    },
    data() {
      return {
        title: "Hello Vue study20190426",
        user: {
          firstName: "username",
          lastName: "wu"
        },
        showName: false,
        // list
        items: [
          {username: "Wx", userAge: "20"},
          {username: "Yl", userAge: "20"},
          {username: "Xl", userAge: "19"},
        ],
        // 表名称
        usersTitle: "用户信息管理",
        // 用户信息表
        users: [
          {id: 1, name: "Wx", age: 20, sex: false, contacted: false},
          {id: 2, name: "Yl", age: 20, sex: true, contacted: false},
          {id: 3, name: "Si", age: 21, sex: false, contacted: false}
        ],
        newUsers: {},
      }
    },
    methods: {
      // 弹出层
      showAlert: function () {
        alert("Hello Vue!");
      },
      // 键盘内容改变事件
      inputKeyup: function () {
        console.log("inputKeyup..");
      },
      // 键盘Enter事件
      inputKeyupEnter: function () {
        console.log("this Input Enter...");
      },
      inputKeyupAltEnter: function () {
        console.log("this Input Alt+Enter...");
      },
      // 用户信息提交
      userSubmit: function (e) {
        this.users.push({
          // id
          id: this.newUsers.id,
          name: this.newUsers.name,
          age: this.newUsers.age,
          sex: this.newUsers.sex,
          contacted: false,
        });
        e.preventDefault();
      },
      // 删除一行
      deleteUser: function (user) {
        // 用当前的对象查询当前当前对象的下标进行删除 删除的长度为1
        this.users.splice(this.users.indexOf(user), 1);
        console.log("this Delete");
      }
    },
    computed: {
      fullName: function () {
        return this.user.firstName + " " + this.user.lastName;
      }
    }
  }
</script>

<style>
  #tableUsers {
    width: 100%;
  }

  /*当上面的样式为真的时候就会执行*/
  .contacted {
    background: darkgrey;
    text-decoration: line-through;
  }
</style>
