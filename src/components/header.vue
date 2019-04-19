<template>
  <div class='header'>
    <!-- <span class="header-name">知乎日报</span> -->
    <span class="button" @click="click">
        <img src="@/assets/return.png" data-change="back">
    </span>
  </div>
</template>

<script>
export default{
  methods:{
    click(e){
      let vue = this
      let change = e.path[0].dataset.change
      if (change === 'back') {
        this.$router.back(-1),
        vue.$store.state.status = 0
      }
    }
  },
  computed:{
    status(){
      return this.$store.state.status
    }
  }
}
</script>

<style scoped>
    .header{
      position: relative;
      z-index: 99;
    }
   .button{
    position: fixed;
    top: 2vw;
    left: 2vw;
    width: 12vw;
    height: 8vw;
    display: inline-block;
  }
  .button img{
    width: 10vw;
    height: 8vw;
  }
</style>