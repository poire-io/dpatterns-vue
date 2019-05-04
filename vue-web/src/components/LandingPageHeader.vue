<template>
<div class="splash" :class="splashStyle">
	<div class="branding" @click="goToDetails('/home')"><span class="sr-only">govConnect Launch Pad</span></div>
	<div class="close" @click="goToDetails('/')"><em class="fa fa-times-circle"><span class="sr-only">Close Application</span></em></div>
	<div class="go-back" @click="$router.go(-1)"><em class="fa fa-hand-point-left"><span class="sr-only">Go Back to Previous Section</span></em></div>
</div>
</template>

<script>
export default {
	props: {
		splashStyle: {
			type: String,
			default: 'home',
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables'; // core colors, paths
$img-path: "../assets/images/";

.close {
	em {
		position: absolute;
		right: 1rem;
		top: 1rem;
		font-size: 3rem;
		color: $white;
	}
}

.go-back {
	em {
		position: absolute;
		left: 3rem;
		top: 1rem;
		font-size: 3rem;
		color: rgba( $white, .7 );
	}
}
</style>
