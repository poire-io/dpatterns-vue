<template>
    <b-button-group v-bind="$props">
        <slot></slot>
    </b-button-group>
</template>
<script>
    import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';

    const btnGroupProps = Object.assign({}, bButtonGroup.props);

    export default {
        components: { bButtonGroup },
        props: {
            ...btnGroupProps,
        }
    };
</script>


