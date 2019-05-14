<template>
  <div id="app">
    <login-view></login-view>
  </div>
</template>

<script>
  import login from '@/components/login'
  export default {
    name: 'App',
    components:{
      "loginView":login
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin-top:400px ;
  }
</style>
