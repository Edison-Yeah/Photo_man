<template>
     <div>
             <div id="date_time">
                    <a-button >月份</a-button>
                    <a-button>日期</a-button>
             </div>
            
             <div id="photo_list">
                     <div id="img" >
                    
                     </div>
                     
             </div>

             
     </div>
</template>

<script>

     export default {
         mounted() {
             this.get_img();
         },
         methods: {
             get_img: function() {
                 var parent = document.getElementById("img");
                 
                  // img[],li[],number
                  var mounth_number=2;
                  
                  for (var j=1;j<=mounth_number;j++){
                     var div;
                     div = document.createElement("div");
                     div.id = 'photo_list'+j;
                      var p =document.createElement("p");
                      var hr = document.createElement("HR");

                      p.innerHTML='2019.01';
                      hr.SIZE = 3;
                      hr.style="width:100%";
                      
                      div.appendChild(p)
                      div.appendChild(hr)
                      
                      var img_number=8;
                      var ul = document.createElement("ul");
                      for (var j=1;j<=img_number;j++) {
                           var li = document.createElement("li");
                      var img = document.createElement("img");
                       
                     img.src = require('../assets/dog1.png');
                      li.appendChild(img);
                      ul.appendChild(li);
                     
                      }
                      div.appendChild(ul);
                      
                      parent.appendChild(div);
                  }

                  
            
                 
             }
         } 
     }
</script>

<style>
   #photo_list p {
       float:left;
   }
   #photo_list HR {
       float:left;
   }
   #photo_list {
       float:left;
       margin-top:20px auto;
       
   }
   #photo_list #img #ul{
       margin:0 auto;
   }
   #photo_list #img ul li{
       border:4px solid #fff;
       /*粗细 风格 颜色边框*/
       list-style-type:none;/*去掉前面的圆点*/
       float:left;/*左浮动*/
       margin:10px 30px;
        box-shadow:5px 5px 10px #000;
     }
</style>