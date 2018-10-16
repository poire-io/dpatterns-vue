<template>
  <div id="app">
    <img src="logo@2x.png" alt="DPatterns Logo">
    <router-view></router-view>
    <li>
    <router-link :to="{ name:'FormControls'}">FormControls</router-link>
    </li>
   <!-- <p>Value is : {{value}} </p>-->
  </div>
</template>

<script>
import FormControls from './FormControls.vue'
  export default {
    name: 'app',
    components: {FormControls},
    data () {
      return{
        value: 'TextInput'
      }
      
    }
  }
</script>

<style scoped lang="scss">
  body {
      background: #154570;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
