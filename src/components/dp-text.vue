<template>
  <div class="form-group">
    <label class="" :for="id">{{label}}</label>
    <b-form-input :name="name" :id="id" :value="value" 
      :maxlength="max" :icon="icon" v-bind="$attrs"
      :type="type" v-validate="validate" v-on:input="onInput" 
      v-on:blur="handleBlur" v-on:change.native="handleChange" v-uppercase 
      :placeholder="placeholder">{{label}}</b-form-input>
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
