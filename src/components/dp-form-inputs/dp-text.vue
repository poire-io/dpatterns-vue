<template>
    <b-form-input :id="id" :type="type" v-bind:value="value" v-on:input="onInput"></b-form-input>
</template>
<script>
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

    export default {
      extends: bFormInput,
      props: {
          plaintext: {
            type: Boolean,
          },
          value: {
            type: String,
          },
          type: {
            type: String,
          }
      },
      methods: {
        onInput(value) {
            this.$emit('input', value);
        },
      },
    };
</script>
