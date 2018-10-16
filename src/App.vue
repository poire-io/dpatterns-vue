<template>
  <div id="app">
    <img class="branding" src="logo@2x.png" alt="DPatterns Logo">
    <div class="container">
      <router-view></router-view>
    </div>
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

<style lang="scss">
  body {
      background: #154570 !important;
  }
  .container {
    background: #FFFFFF;
    text-align: left;
    padding: 30px 100px !important;
  }
  .branding {
    margin: 0 0 40px 0;
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
