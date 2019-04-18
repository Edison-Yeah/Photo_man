<template>
        <div id="story">
             <div id="story_photo_list">
                 <div id="photo_list_content">
                     photo_list_content
                 </div>
             </div>
             <div id="story_content">
                 <textarea id="content_text" readonly></textarea>
             </div>
        </div>

</template>

<script>
     export default {
         data() {
             return {
                
             }
         },
         mounted() {
             this.load_content_text();
         },
         methods: {
              load_content_text: function() {
                  $('#content_text').html('new story');
              }
             
         } 
     }
</script>

<style>
    .story{

    }
    .story .story_photo_list {
        width:80%;
        height:30%;
        margin:0 auto;
    }
    .story .story_content {
        width: 80%;
        margin: 0 auto;
    }
</style>