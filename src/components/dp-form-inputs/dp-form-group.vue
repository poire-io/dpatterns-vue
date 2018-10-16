<template>
  <div class="form-group">
    <DPLabel v-if="'label!=null'" :id="id" :label="label"/>
    <DPText v-if="type==='text'" :name="name" :value="value" :maxlength="max" :icon="icon" :type="type" :placeholder="placeholder" :label="label" :state="state"/>
    <b-form-invalid-feedback id="inputLiveFeedback"> 
      {{errorMsg}}
    </b-form-invalid-feedback>
    <b-form-text id="inputLiveHelp">
      {{helpTxt}}
    </b-form-text>
  </div>   
</template>
<script>
import DPLabel from './dp-label.vue'
import DPText from './dp-text.vue'
export default {
    components:{
        DPLabel,
        DPText
    },
   props:{
    id:{
        type: String
    },
    label:{
        type: String
    },
    placeholder: {
      type: String
    },
    max: {
      type: Number
    },
    validate: {
      type: [String, Object]
    },
    value: {
      type: String
    },
    message: {
      type: String
    },
    icon: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String
    },
    errorMsg:{
        type: String
    },
    helpTxt:{
        type: String
    },
    state:{
        type: Boolean, 
        default: null
    }
   } 
}
</script>
