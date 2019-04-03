<template>
     <div>
         <myhead></myhead>
         <div class="content">
             <h1>{{msg}}</h1>
             <button>创建相册</button>
             <input type="file" accept="image/*" @change="chooseImg" />
             <canvas ref="imgPreview" height="0" width="0"></canvas>
             <button @click="uploadImg">提交图片</button>
             <img :src="imgUrlFromServer" alt="">
         </div>
         <myfoot></myfoot>
      </div>
</template>

<script>
import myhead from './head'
import myfoot from './foot'
import {getCookie} from '../assets/js/cookie.js';

export default {
    name: 'user',
    components: {
        myhead,
        myfoot
    },
    data() {
        return {
            msg: '',
            imgUrlFromServer: '#',
            base64: '',
            file: '',
            FinalFile: ''
        }
    },
    mounted() {
        /*
        var upload = document.getElementById("btnUpload")
        var avatar = document.getElementById("avatar")
        upload.onclick = function(){
            avatar.click();
        }
        */
        if(getCookie('username')){
            this.msg = 'Welcome'+document.cookie
        }
    },
    methods: {
        init() {
            this.imgUrlFromServer = this.FinalFile
        },
        chooseImg(event) {
            this.file = event.target.files[0]
            let reader = new FileReader()
            let img = new Image()
            //读取图片
            reader.readAsDataURL(this.file)
            
            reader.onloadend = (e) => {
                img.src = e.target.result
                //这里的e.target就是reader
                //reader.result就是图片的base64字符串

                //this.base64 = reader.result
            }
            

            //这部分是将上传的图片利用canvas画出来
            let canvas = this.$refs['imgPreview']
            let context = canvas.getContext('2d')
            img.onload = () => {
                img.width = 100
                img.height = 100
                //设置canvas 大小
                canvas.width = 100
                canvas.height = 100
                //清空canvas
                context.clearRect(0,0,100,100)
                //画图
                context.drawImage(img,0,0,100,100)
            }
        },
        uploadImg() {
            var formData = new FormData();
            formData.append('file', this.file);

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            var that = this
            this.$http.post('api/upload/Uploadimg', formData, config).then((response) => {
                
                that.FinalFile = '../../static/uploads' + response.data.imgUrl
                console.log(that.FinalFile)
                that.init()
               // that.imgUrlFromServer = '../../static/uploads' + response.data.imgUrl
            }
            );
           // console.log(this.message)
        }
    }
}
</script>

<style scoped>
     h1 {
         font-weight: normal;
     }

     .content {
         width:90%;
         height:80%;
         background:red;
         margin:0 auto;
     }

</style>