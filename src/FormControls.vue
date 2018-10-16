<template>
  <div class="row">
    <div class="col-12">
      <h1>Forms.</h1>
      <h2 class="mb-3">This is where you can come to see all Form Controls.</h2>
      <p>Form controls are used to build web forms. You can use these controls and build robust pages.</p>
      <div class="row">
        <div class="col-4">
          <dp-label label="Label Sample" id="textInput"/>
          <br/>
          <dp-text type="text" label="Text type" name="Text type" id="textInput" :max=4 placeholder="Input Text Field." :value="value"  v-model="value" icon="Search" />
          <!--<dp-text type="time" label="Time type" name="Time type" id="timeInput"/>-->
          <br/>
          <dp-form-group type="text" label="Text type" name="Text type" id="textInput" :max=5 placeholder="Valid Text Group." :value="validValue"  v-model="validValue" icon="Search" errorMsg="Validation error" helpTxt="Help Text display" :state="true"/>

          <dp-form-group type="text" label="Text type" name="Text type" id="textInput" :max=6 placeholder="Invalid Text Group." :value="invalidValue"  v-model="invalidValue" icon="Search" errorMsg="Validation error" helpTxt="Help Text display" :state="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DPText from './components/dp-form-inputs/dp-text.vue'
import DPLabel from './components/dp-form-inputs/dp-label.vue'
import DPFormGroup from './components/dp-form-inputs/dp-form-group.vue'
  export default {
    components: {
    'dp-text': DPText,
    'dp-label': DPLabel,
    'dp-form-group': DPFormGroup
    },
    data(){
      return{
        value: null,
        validValue: null,
        invalidValue: null
      }
    }}
</script>