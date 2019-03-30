<template>
  <div id="zhihu">
    <v-header></v-header>
    <v-nav></v-nav>
    <v-content :info="info.data"></v-content>
  </div>
</template>

<script>
import header from '@/components/header'
import nav from '@/components/nav'
import content from '@/components/content'
// import axios from 'axios'
export default{
  name:'zhihu',
  data(){
    return {
      info:''
    }
  },
  components:{
    'v-header': header,
    'v-nav': nav,
    'v-content': content
  },
  mounted(){
    this.$axios
      .get('api/4/news/latest')
      .then(res => (
        this.info = res,
        // eslint-disable-next-line no-console
        console.log(res)
      ))
  }
  
}
</script>

<style scoped>
  @import url('./assets/reset.css');
</style>