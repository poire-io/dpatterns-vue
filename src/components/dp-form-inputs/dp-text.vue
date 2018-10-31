<template>
    <b-form-input @blur="handleBlur" :id="id"></b-form-input>
</template>
<script>
    import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

    export default {
      extends: bFormInput,
      props: {
          max: {
              type: Number,
          },
          validate: {
              type: [String, Object],
          },
          icon: {
              type: String,
          },
          blurHandler: {
              type: Function,
          },
      },
      methods: {
        handleBlur() {
          if (this.blurHandler) {
            this.blurHandler();
          }
        },
      },
    };
</script>
