<template>
  <div id="app">
    <img src="./assets/logo.png">

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <router-link to="/">home</router-link>
    <router-link :to="{name:'note',params:{name:'weilizong'}}">note</router-link>
    <button @click="confirm">确认</button>
    <h4 id="-">对萨法开了家</h4>
    <p>大福利开机</p>
    <hr>
    <p>散打服开了家</p>
    <pre><code>十大法师打
</code></pre>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    confirm(){
      this.$swal('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
        console.log("确定");
      }).catch(() => {

      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*页面切换动画*/
/*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
  transition: opacity .5s;
}
/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
  opacity: 0;
}
/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
  opacity: 1;
}
/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
  opacity:0;
  transition: opacity .5s;
}

</style>
