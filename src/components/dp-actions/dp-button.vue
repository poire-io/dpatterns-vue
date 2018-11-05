<template>
    <b-button v-bind="$props">
        <slot></slot>
    </b-button>
</template>

<script>
    import bButton from 'bootstrap-vue/es/components/button/button';
    
    const btnProps = Object.assign({}, bButton.props);

    export default {
        components: { bButton },
        props: {
            ...btnProps,
        }
    }
</script>