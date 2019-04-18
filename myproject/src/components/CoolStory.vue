<template>
     <div>
             <div id="date_time">
                    <a-button >月份</a-button>
                    <a-button>日期</a-button>
             </div>
            
             <div id="photo_list">
                 
                     <div v-for="mounth in m_number" style="width:100%;float:left;margin-bottom:2%;">
                       <ul>
                            <p>{{mounth.datatime}}</p>
                            <hr></hr>
                           
                           <li v-for="photo in p_number">
                                <img :src="photo.src" :index="photo.index" v-on:click="enterStory">
                                </img>
                                <h3>{{storyname}}</h3>
                           </li>
                           
                       </ul>
                     </div>
                     
             </div>

             
     </div>
</template>

<script>
     export default {
         data() {
             return {
                 storyname: 'new story',
                 m_number: [
                     {datatime:'2019/01'},
                     {datatime:'2019/02'}
                 ],
                 p_number: [
                     {src:require('../assets/dog1.png'),data_original:require('../assets/dog.png'),index:1},
                     {src:require('../assets/dog1.png'),data_original:require('../assets/dog.png'),index:2},
                     {src:require('../assets/dog1.png'),data_original:require('../assets/dog.png'),index:3},
                     {src:require('../assets/dog1.png'),data_original:require('../assets/dog.png'),index:4},
                     {src:require('../assets/dog1.png'),data_original:require('../assets/dog.png'),index:5}
                 ]
             }
         },
         methods: {
             enterStory: function() {
                  //console.log('进入新页面')
                  this.$router.push('/story');
             }
             
         } 
     }
</script>

<style>
   #photo_list  p {
       float:left;
       width:100%;
       margin-left:-40%;
   }
   #photo_list  HR {
       float:left;
       width:100%;
   }
   #photo_list {
       float:left;
       margin-top:20px auto;
       
   }
   #photo_list  ul li{
       border:4px solid #fff;
       /*粗细 风格 颜色边框*/
       list-style-type:none;/*去掉前面的圆点*/
       float:left;/*左浮动*/
       margin:10px 30px;
        box-shadow:5px 5px 10px #000;
     }
</style>