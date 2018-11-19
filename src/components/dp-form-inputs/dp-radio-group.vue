<template>
    <b-form-radio-group :options="options"></b-form-radio-group>
</template>
<script>
    import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';

    export default {
        extends: bFormRadioGroup,
    };
</script>
