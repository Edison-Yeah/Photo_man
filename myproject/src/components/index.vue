<template>
   <div>
      <div class="photo">
      <img :src='imgUrl' alt="">
      </div>
     <div class="login">
        <h1>{{msg}}</h1>
         <div class="login-wrap" v-show="showLogin">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入登录用户名" v-model="username"><br/>
            <br/>
            <input type="password" placeholder="请输入密码" v-model="password"><br/>
            <br/>
            <button v-on:click="login">登录</button>
            <span>还没账号?</span>
            <button v-on:click="ToRegister" style="background-color:#fff;border:1px solid #8e8e8e;color:#8e8e8e">注册</button>
         </div>

         <div class="register-wrap" v-show="showRegister">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入注册用户名" v-model="newUsername"><br/>
            <br/>
            <input type="password" placeholder="请输入密码" v-model="newpassword"><br/>
            <br/>
            <button v-on:click="register">注册</button>
            <span>返回登录?</span>
            <button v-on:click="ToLogin" style="background-color:#fff;border:1px solid #8e8e8e;color:#8e8e8e">登录</button>
         </div>
     </div>
   </div>
</template>

<script>
   import {setCookie,getCookie} from '../assets/js/cookie.js';
   export default {
     name: 'index',
     data () {
       return {
         showLogin: true,
         showRegister: false,
         showTishi: false,
         tishi: '',
         msg: 'Welcome to Your Photoman',
         username: '',
         password: '',
         newUsername: '',
         newpassword: '',
         imgUrl:require('../assets/dog.png')
         }
       },
      methods: {
         ToRegister(){
            this.showRegister = true
            this.showLogin = false
           },
         ToLogin(){
            this.showRegister = false
            this.showLogin = true
           },
         login() {
           if (this.username == "" || this.password == "") {
             alert("请输入用户名或密码")
             }else{
               let data = {'username':this.username,'password':this.password}
               this.$http.post('/api/user/selectUser',data).then((res)=>{
               console.log(res)
               if(res.data == -1) {
               this.tishi = "该用户不存在"
               this.showTishi = true
               }else if(res.data == 0) {
                  this.tishi = "密码输入错误"
                 this.showTishi = true
                 }else {
                   this.tishi = "登录成功"
                   this.showTishi = true
                   //this.$router.push('/user')
                   setCookie('username',this.username,1000*60)
                   setTimeout(function(){
                   this.$router.push('/user_index')
                   }.bind(this),1000)
                   }
                })
               }
           },
         register() {
           if(this.newUsername == "" || this.newpassword == "") {
             alert("请输入用户名或密码")
             }else {
               let data = {'username':this.newUsername,'password':this.newpassword}
               this.$http.post('/api/user/addUser',data).then((res)=>{
               console.log(res)
               if(res.data == -1) {
                 this.tishi = "该账号已存在"
                 this.showTishi = true
                 this.newUsername = ''
                 this.newpassword = ''
                 }else if(res.status == 200) {
                   this.tishi = "注册成功"
                   this.showTishi = true
                   this.newUsername = ''
                   this.newpassword = ''
                   }

                })
               }
           }
       }
     }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .photo {
     width:70%;
     height:90%;
     margin:10 auto;
     float:left;
   }
   h1 {
     font-weight: normal;
    }
    .login {
      width:20%;
      height:10%;
      
      float:left;
    }

</style>
