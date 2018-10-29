<template>
    <b-form-input :name="name" :id="id" :value="value" 
      :maxlength="max" :icon="icon" v-bind="$attrs"
      :type="type" @input="onInput" 
      @blur="handleBlur" @change.native="handleChange"  
      :placeholder="placeholder"
      :state="state">{{label}}</b-form-input> 
</template>
<script>
//#TODO: Check if we need to add v-validator or create similar custom filter
//#TODO: Need to add icon function if needed
export default {
 // inject: ["$validator"],
  props: {
    id: {
      type: String
    },
    label: {
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
    blurHandler: {
      type: Function
    },
    state: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    handleBlur() {
      if (this.blurHandler) {
        this.blurHandler();
      }
    },
    handleChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>
