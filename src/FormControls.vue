<template>
  <div class="row">
    <div class="col-12">
      <h1>Forms.</h1>
      <h2 class="mb-3">This is where you can come to see all Form Controls.</h2>
      <p>Form controls are used to build web forms. You can use these controls and build robust pages.</p>
      <div class="row">
        <div class="col-4">
          <DPText type="text" label="Text type" id="textInput" placeholder="Enter name here." :value="value" max="4" v-model="value" icon="Search"/>
          <DPText type="time" label="Time type" id="timeInput"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DPText from './components/dp-text.vue'

  export default {component: {DPText}}
</script>