<template>
  <div id="zhihu">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default{
  name:'zhihu',
  computed:{
    status(){
      return this.$store.state.status
    },
    loading(){
      return this.$store.state.loading
    }
  },
  components:{
    'loading':loading
  }
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