<template>
  <a-layout id="components-layout-demo-custom-trigger">
         <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
                id="sider"
             >
             <div class="logo" />
             <a-menu theme="dark" mode="inline" :defaultSelectedKesys= "['1']" :selectedKeys="[activeNav]">

                 <a-menu-item v-on:click.native="changeNav(1)" key="1">
                     <router-link to="/home"><a-icon type="home" />首页
                     </router-link>
                 </a-menu-item>

                  <a-sub-menu key="sub1">
                         <span slot="title"><a-icon type="camera" />相册</span>
                         <a-menu-item v-on:click.native="changeNav(2)" key="2">
                                <router-link to="/character">人物</router-link>
                         </a-menu-item>
                         <a-menu-item v-on:click.native="changeNav(3)" key="3">
                                <router-link to="/view">风景</router-link>
                         </a-menu-item>
                          <a-menu-item v-on:click.native="changeNav(4)" key="4">
                                <router-link to="/life">生活</router-link>
                         </a-menu-item>
                          <a-menu-item v-on:click.native="changeNav(5)" key="5">
                                <router-link to="/others">其他</router-link>
                         </a-menu-item>
                 </a-sub-menu>

                 <a-menu-item v-on:click.native="changeNav(6)" key="6">
                         <router-link to="/CoolStory"><a-icon type="highlight" />日志
                         </router-link>
                 </a-menu-item>

                  <a-menu-item v-on:click.native="changeNav(7)" key="7">
                        <router-link to="/AmazingTime"><a-icon type="play-circle" />影集
                        </router-link>
                 </a-menu-item>
             </a-menu>
         </a-layout-sider>

         <a-layout>
             <a-layout-header id="header" >
                 <div id="icon">
                            <a-button v-on:click="backPage" shape="circle" style="margin-left:20px" ><a-icon type="arrow-left" /></a-button>

                            <router-link to="/search"><a-button style="margin-left:20px"  shape="circle" icon="search" ></a-button></router-link>
                         <router-link to="/setting"><a-button  style="margin-left:20px" shape="circle" icon="setting" ></a-button></router-link>

                            <a-button style="margin-left:20px" shape="circle" icon="user" ></a-button>
                    </div>

             </a-layout-header>

             <a-layout-content :style="{ margin: '50px 16px 0px 220px', padding: '24px', background: '#fff', minHeight: '590px',position:'relative' }">
                <router-view/>
             </a-layout-content>

             <a-layout-footer style="text-align: center">
                     Design ©2019 Created by IversonHan
       
             </a-layout-footer>

         </a-layout>
     </a-layout>
</template>
<script>

export default {
     activated() {
          this.$setgoindex()
     },
     data(){
         return {
         collapsed: false,
         activeNav:'1'
         }
     },
     mounted() {
         this.getLocation();
     },
     methods:{
         getLocation:function(){
          
          this.$router.push('/home')      
         },
         changeNav:function(number){
             this.activeNav=''+number;
         },
         backPage:function(){
             if (this.$route.query.goindex === 'true') {
                 this.$router.push('/')
             } else {
                 this.$router.back(-1)
                 }
             }
         }
  
     }
</script>

<style>
     #components-layout-demo-custom-trigger{
          width: 100%;
     }
     #components-layout-demo-custom-trigger .trigger {
         font-size: 18px;
         line-height: 64px;
         padding: 0 24px;
         cursor: pointer;
         transition: color .3s;
     }

     #components-layout-demo-custom-trigger .trigger:hover {
         color: #1890ff;
     }

     #components-layout-demo-custom-trigger .logo {
         height: 32px;
         background: rgba(255,255,255,.2);
         margin: 16px;
     }
     #sider{
         height:750px;
         position: fixed;
         z-index: 2;
         top:-0.5px;
     }

     #header{
         width: 100%;
         left:200px;
         background: rgb(8,46,84); 
         padding: 0;
         position:fixed;
         z-index: 1;
         top:-0.5px;
     }
     #header #icon{
         margin-left:45%;
  
     }
</style>