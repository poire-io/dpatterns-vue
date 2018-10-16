<template>
  <div>
  <DPText type="text" label="Text type" id="textInput" :value="value" max="4" v-model="value" icon="Search"/>
    <DPText type="time" label="Time type"/>    
  <p>Hello</p>   
  </div>
</template>

<script>
import DPText from './components/dp-text.vue'

  export default {component: {DPText}}
</script>