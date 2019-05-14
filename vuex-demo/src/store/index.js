/**
 * @description
 * @author LIZONG.WEI
 * @date 2019/5/8 12:01
 * @version V1.0
 */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:1
  },
  getters:{
    getStateCount:function(state){
      return state.count + 1
    }
  },
  mutations:{
    add:function(state){
      state.count++;
    },
    sub:function(state,n){
      state.count -= n;
    }
  },
  actions:{
    addAction:function(context){
      context.commit("add");
    },
    subAction:function(context,n){
      context.commit("sub",n);
    }
  }
});

export default store
