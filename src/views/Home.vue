<template>
  <div class='app-view' @click="handleScroll()">
    <swiper class="swiper-wrapper" :options="swiperOption"  ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="item in top" :key="item.id" @click.native="getId(item.id)">  
        <img :src="item.image">
        <h3>{{item.title}}</h3>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="list" v-for="(items,index) in list" :key="items.id" ref="list">
      <!-- <p class="list-date">{{items.date.substring(4,6)+"月"+items.date.substring(6,8)+"日"}}</p> -->
      <p class="list-date">{{date[index]}}</p>
      <div class="list-con" v-for="item in items.stories" :key="item.id" @click="getId(item.id)">
        <img class="list-img" :src="item.images">
        <p class="list-title">{{item.title}}</p>
      </div>
    </div>
    <div class="load" v-show="load">
      <img src="@/assets/Ellipsis-1.5s-200px.gif" alt="">
    </div>
  </div>
</template>

<script>
import api from '@/api.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'app-view',
  components: {
    swiper,
    swiperSlide,
  },
  data(){
    return{
      list:[],
      date:[],
      count:0,
      lock:true,
      load:false,
      swiperOption:{
        speed:1000,
        notNixtTick:true,
        loop:false,
        autoplay:true,
        initialSlide:0,
        pagination: {
          el: '.swiper-pagination',
        },
        paginationType : 'bullets',
        observer:true,
        observeParents:true,
        observeSlideChildren:true
      },
      top:''
    }
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper.swiper;
    },
    status(){
      return this.$store.state.status
    }
  },  
  mounted(){
    this.getList(1)
    this.getDate()
    this.handleScroll()
  },
  created(){
     window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
    getList(type){
      let vue = this
      if (type) {
        api.getNews().then(res=>{
          this.list.push(res.data)
          this.top = res.data.top_stories
          this.$store.commit('hide')
          // eslint-disable-next-line no-console
          console.log(this.top);
        })
      }else{
        api.getNewsDate(vue.getNewsDate(vue.count)).then(res=>{
          this.list.push(res.data)
        })
        
      }
    },
    getNewsDate(Count){
      let dd = new Date();
      dd.setDate(dd.getDate() + Count);
      this.getDate(dd);
			var y = dd.getFullYear();
			var m = dd.getMonth() + 1;
			m = m >= 10 ? m : "0" + m
			var d = dd.getDate();
      d = d >= 10 ? d : "0" + d;
			return y + "" + m + "" + d;
    },
    getDate(dd){
      let date = new Date().toDateString()
      if (dd) {
        date = dd.toDateString()
      }
      this.date.push(date)
    },
    getId(id){
      let vue = this
      this.$store.commit('show')
      // eslint-disable-next-line no-console
      console.log(this.$store.state.loading);
      
      this.$router.push({
        path:"article",
        query:{
          id:id
        }
      }),
      vue.$store.state.status = 1
    },
    loadd(){
      this.count--
      this.getList(0)
    },
    handleScroll(){
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.body.scrollHeight;
      if ((scrollTop + clientHeight) >= scrollHeight) {
          this.load = true
          setTimeout(() => {
            this.loadd()
          }, 1000);
      }
    }
  }
}
</script>

<style>
  .app-view{
    height: 100%;
    position: relative;
  }
  .app-view .swiper-container{
    height: 60vw;
    background-color: black;
  }
  .app-view .swiper-slide{
    position: relative;
  }
  .app-view .swiper-slide img {
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
    opacity: 0.6;
  }
  .app-view .swiper-slide h3{
    position: absolute;
    color: #fff;
    font-size: 5vw;
    line-height: 7vw;
    font-weight: 700;
    bottom: 10vw;
    width: 70%;
    right: 5vw;
    text-align: right;
    opacity: 1;
  }
  .app-view .swiper-pagination-bullet{
    background: #fff;
  }
  .app-view .list{
    width: 90%;
    position: relative;
    margin: 0 auto;
    margin-top: 2vw;
  }
  .app-view .load{
    position: relative;
    width: 100vw;
  }
  .app-view .load img{
    width: 10vw;
    height: 10vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .app-view .list-date{
    font-size: 5vw;
    line-height: 4vw;
    padding: 2vw;
    display: inline-block;
    margin-bottom: 2vw;
    color: rgb(94, 94, 94)
  }
  .app-view .list-con{
    padding: 3vw;
    display: flex;
    align-items: center;
    margin-bottom: 4vw;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px 0 rgba(91,115,146,.15);
  }
  .app-view .list-img{
    width: 20vw;
    margin-right: 4vw;
  }
  .app-view .list-title{
    font-size: 4vw;
    text-align: justify;
    color: rgb(95, 95, 95);
    font-weight: 600;
  }
</style>