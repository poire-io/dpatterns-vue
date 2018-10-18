<template>
  <div id="app">
    <form name="frmMain" id="frmMain">
      <!-- <global-header></global-header> -->
      <div class="container-fluid main-content" role="main">
        <DPNavSide/>
        <router-view></router-view>
      </div>
    </form>
  </div>
</template>

<script>
  import DPNavSide from './components/nav/dp-nav-side'

  export default {
    name: 'app',
    components: {
      DPNavSide
    }
  }
</script>
