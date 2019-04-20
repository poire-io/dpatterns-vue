<template>
<div class="card">
	<div class="card-header" :class="variant" v-html="title" />
	<div class="card-body">
		<div class="row">
			<div class="col">
				<span class="card-icon"><em :class="iconModifier + ' ' + icon"></em></span>
			</div>
		</div>
		<div class="row description">
			<div class="col">
				<slot name="body"></slot>
			</div>
		</div>
	</div>
	<div class="card-footer">
		<slot name="footer"></slot>
	</div>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		icon: {
			type: String,
		},
		iconModifier: {
			type: String,
		},
		variant: {
			type: String,
		},
	},
};
</script>

<style lang="scss">
$font-path: "../assets/fonts/" !default;
@import '../assets/scss/fonts'; // core colors, paths
@import '../assets/scss/variables'; // core colors, paths

.card {
	border-radius: 0;
}

.card-header {
	background: none;
	border-bottom: none;
	border-top: 0.5rem solid;
	text-align: center;
	font-family: $base-font-bold;
	font-size: 1.2rem;
	padding-bottom: 0;
	&:first-child {
		border-radius: 0;
	}
	&.blue {
		border-color: $sky_blue;
	}
	&.green {
		border-top: 0.5rem solid $green;
	}
	&.pink {
		border-top: 0.5rem solid $pink;
	}
	&.lavender {
		border-top: 0.5rem solid $lavender;
	}
	&.orange {
		border-top: 0.5rem solid $orange;
	}
}

.card-body {
	text-align: center;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-bottom: 0;
	.description {
		margin-top: 0.625rem;
		font-family: $base-font-light;
		text-align: left;
	}
}

.card-footer {
	text-align: center;
	background: none;
	border-top: none;
}

.card-icon {
	em {
		font-size: 4rem;
	}
}
</style>
