<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import * as types from './vuex/mutation-types'
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-in'
      }
    },
    watch: {
      '$route' (to, from) {
        let animationWay = this.$store.state.animationWay;
        this.transitionName = animationWay === 'reverse' ? 'slide-out' : 'slide-in';
        if(to.name === 'msg'){
          this.$store.commit(types.SAVE_ANIMATION_WAY, {
            way: false
          });
        }
      }
    }
  }
</script>

<style>
  html,body{
    height: 100%;
  }
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    overflow: hidden;
  }
</style>
