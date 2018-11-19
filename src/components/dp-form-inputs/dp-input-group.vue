<template>
    <b-input-group v-bind="$props">
        <slot></slot>
    </b-input-group>
</template>

<script>
    import bInputGroup from 'bootstrap-vue/es/components/input-group/input-group';
    
    const inputProps = Object.assign({}, bInputGroup.props);

    export default {
        components: { bInputGroup },
        props: {
            ...inputProps,
        }
    }
</script>
