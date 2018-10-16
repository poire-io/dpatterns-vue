<template>
<div>
<label>{{label}}</label>
  <b-form-input :name="name" :id="id" :value="value" 
    :maxlength="max" :icon="icon" v-bind="$attrs"
    :type="type" v-validate="validate" v-on:input="onInput" 
    v-on:blur="handleBlur" v-on:change.native="handleChange" v-uppercase 
    placeholder="Enter your name">{{label}}</b-form-input>
    <!--<p>Value: {{ label }}</p>-->
    </div>
    </template>
<script>
export default {
  inject: ["$validator"],
  props: {
    id: {
      type: String
    },
    label: {
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

<style lang="scss" scoped>

  .input {
    font-family: "Montserrat", "Verdana";
    font-size: 14px;
    background-color: white;
    color: black;
    border-radius: 3px;
    padding-left: 10px;
  }

  .input[readonly] {
    background-color: white;
  }

  .help {
    text-align: right;
  }

</style>
