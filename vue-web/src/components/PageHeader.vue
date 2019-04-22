<template>
<div class="row ml-3 mr-3 mb-3 sr-only">
	<div class="col">
		<h1>{{title}}</h1>
	</div>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
	},
};
</script>
