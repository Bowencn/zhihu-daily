<template>
  <div id="zhihu">
    <v-header v-show="status"></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import header from '@/components/header'
import loading from '@/components/loading'
export default{
  name:'zhihu',
  data(){
    return {
    }
  },
  computed:{
    status(){
      return this.$store.state.status
    },
    loading(){
      return this.$store.state.loading
    }
  },
  components:{
    'v-header': header,
    'loading':loading
  },
  methods:{}
}
</script>

<style >
  html,body,#zhihu{
      height: 100%;
      width: 100%;
      background-color: rgba(249, 250, 255, 100);
    }
  #zhihu{
    position: relative;
  }
  html::-webkit-scrollbar { width: 0 !important };
  
  @import url('./assets/reset.css');
</style>