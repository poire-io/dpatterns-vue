<template>
  <div class="form-group">
    <dpLabel v-if="'label!=null'" :label="label" :id="id"/>
    <dpText v-if="type==='text'" :id="id" :name="name" :value="value" :maxlength="max" :icon="icon" :type="type" :placeholder="placeholder" :label="label" :state="state" v-on:input="onInput"/>
    <b-form-invalid-feedback :id="'inputFeedback_' + id">
      {{errorMsg}}
    </b-form-invalid-feedback>
    <b-form-text :id="'inputHelp_' + id">
      {{helpTxt}}
    </b-form-text>
  </div>   
</template>
<script>
  export default {
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
    },
    methods: {
      onInput(value) {
        this.$emit("input", value);
      }
    } 
  }
</script>
