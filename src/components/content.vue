<template>
  <div id='con'>
    <ul class="con-list" >
      <!-- {{dataList}} -->
      <li v-for="item in dataList" :key="item.id" class="info">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'con',
  data(){
    return{
      dataList: ''
      
    }
  },
  props:['info'],
  created(){
    this.dataList = this.info
    // eslint-disable-next-line no-console
    console.log(this.info);
    
  }
}
</script>

<style scoped>
.con{
  height: 100%;
}
  .con-list{
    background-color: rgb(238, 238, 238);
    display: flex;
    flex-direction: column;

  }
  .info{
    background-color: #fff;
    flex-grow: 1
  }
</style>