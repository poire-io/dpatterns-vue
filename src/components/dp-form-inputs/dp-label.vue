<template>
   <label :id="id" :for="forLabel">{{label}}</label>
</template>
<script>
//#TODO: Check if we need to add type and message validations using v-validator for errors as in PENNDOT project.
export default {
    props: {
        id: {
            type: String
        },
        name: {
           type: String
        },
        label: {
           type: String
        },
        forLabel: {
            type: String
        }
    }
}
</script>
