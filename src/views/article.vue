<template>
  <div class="article">
    <div class="art-img">
      <img :src="data.image" alt="" class="top-img" >
      <span class="block"></span>
      <span class="title">{{data.title}}</span>
      <span class="image_source">{{data.image_source}}</span>
    </div>
    <div class="atr-con" v-html="data.body"></div>
  </div>
</template>

<script>
import api from '@/api.js'
export default {
  data(){
    return{
      data:''
    }
  },
  computed:{
    articleId(){
      return this.$store.state.article
    }
  },
  activated:function () {
    let vue = this,
        id = this.$route.query.id;
        this.$store.commit('hide')
    if (this.articleId.hasOwnProperty(id)) {
      this.data = this.articleId[id];
		} else {
			api.getNewsId(id).then(function(data) {
				vue.articleId[id] = data.data;
        vue.data = data.data;
			});
		}
  },
  deactivated:function () {
    this.data = ""
  }
}
</script>

<style >
  .article{
    height: 100%;
    position: relative;
  }
  .article .art-img{
    position: absolute;
    height: 60vw;
    width: 100%;
  }
  .article .top-img{
    width: 100%;
    position: absolute;
    top: -22vw;
  }
  .article .block{
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: inline-block;
    opacity: 0.3;
  }
  .article .image_source{
    color: #f0f0f0;
    position: absolute;
    bottom: 3vw;
    right: 5vw;
    font-size: 12px;
    z-index: 2;
  }
  .article .atr-con{
    width: 90vw;
  }
  .article .title{
    position: absolute;
    bottom: 6vw;
    left: 5vw;
    color: #fff;
    font-size: 17px;
    line-height: 1.6em;
    letter-spacing: 1vw;
    z-index: 2;
  }
  .question .question-title{
    font-weight: 700;
    padding-bottom: 5vw;
  }
  .article .atr-con{
    padding: 5vw;
    background-color: #fff;
    position: absolute;
    top: 60vw;
  }
  .article .meta {
    position: relative;
    padding: 1vw;
  }
  .article .meta .avatar{
    width: 5vw;
    position: absolute;
    top: 0.5vw;
  }
  .article .author{
    color: #000;
    font-weight: 800;
    font-size: 16px;
    padding-left: 7vw;
    position: relative;
    bottom: 0;
    /* left: 7vw; */
  }
  .article .meta .bio{
    font-size: 14px;
    color: rgb(160, 160, 160);
    display: inline-block;
    width: 44vw;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: absolute;
    top: 1.7vw;
  }
  .article p,blockquote{
    font-size: 16px;
    padding: 3vw 0;
    text-align: justify;
    letter-spacing: 0.4vw;
    line-height: 6vw;
  }
  .article h2{
    line-height: 6vw;
  }
  .article p a{
    color: rgb(23, 96, 190);
  }
  .article .content-image{
    width: 100%;
  }
  .article .view-more{
    margin-top: 3vw;
    margin-bottom: 3vw;
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 1.5vw 0;
    background-color: rgb(243, 243, 243);
  }
  .article .view-more a{
    color: rgb(167, 167, 167);
    font-size: 16px;
  }
</style>