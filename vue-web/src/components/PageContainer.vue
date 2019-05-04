<template>
<div class="body-content">
	<div class="errors" v-if="serviceErrors">
		<b-alert variant="danger" show>
			<h4>{{serviceErrors}}</h4>
		</b-alert>
	</div>
	<LandingPageHeader :splashStyle="splashStyle" />
	<div class="page-body" :class="pageHeaderStyle">
		<PageHeader :title="title" :srOnly="srOnly" />
		<slot name="pageBody"></slot>
	</div>
</div>
</template>

<script>
const store = '../store/store.ts';

export default {
	props: {
		title: {
			type: String,
		},
		pageHeaderStyle: {
			type: String,
			default: 'page-header',
		},
		splashStyle: {
			type: String,
			default: 'home',
		},
		srOnly: {
			type: Boolean,
		},
		pageBodyHeight: {
			type: String,
		},
	},
	computed: {
		serviceErrors () {
			return this.$store.state.serviceErrors;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables'; // core colors, paths

.errors {
	z-index: 1001;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	.alert {
		border: none;
		border-radius: 0;
		height: 2.5rem;
		h4 {
			color: $white;
			font-size: 1.2rem;
			margin-top: -0.2rem;
		}
		&.alert-danger {
			background: $rusted_red;
		}
	}
}
</style>
