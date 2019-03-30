<template>
  <div class='nav'>
    <ul class="nav-bar">
      <li class="chose">
        <span >最新</span>
      </li>
      <li>
        <span>最热</span>
      </li>
      <li>
        <span>过往</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
  .nav{
    /* border-bottom: 1px solid rgb(109, 109, 109) */
  }
  .nav-bar{
    display: flex;
    flex-wrap: nowrap;
  }
  .nav-bar li{
    flex-grow: 1;
    text-align: center;
  }
  .nav-bar li span{
    font-size: 14px;
    display: inline-block;
    margin: 10px auto;
  }
  .nav-bar .chose{
    border-bottom: 2px solid rgb(0,119,230)
  }
</style>