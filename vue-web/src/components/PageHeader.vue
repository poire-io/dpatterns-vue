<template>
<div class="row ml-3 mr-3 mb-3" :class="{ 'sr-only': srOnly }">
	<div class="col">
		<h1 v-html="title" />
	</div>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		srOnly: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
