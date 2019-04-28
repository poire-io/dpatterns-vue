<template>
<div class="splash" :style="{ height: splashHeight, backgroundPosition: '50% ' + splashBgHeight }">
	<div class="branding" @click="goToDetails('/home')"><span class="sr-only">govConnect Launch Pad</span></div>
	<div class="close" @click="goToDetails('/')"><em class="fa fa-times-circle"><span class="sr-only">Close Application</span></em></div>
	<div class="go-back" @click="$router.go(-1)"><em class="fa fa-hand-point-left"><span class="sr-only">Go Back to Previous Section</span></em></div>
</div>
</template>

<script>
export default {
	props: {
		splashHeight: {
			type: String,
		},
		splashBgHeight: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables'; // core colors, paths
$img-path: "../assets/images/";

.splash {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 30rem;
	background: url(#{$img-path}splash.jpg) fixed 50% 800px;
	border-bottom: .0625rem solid rgba( $light-gray, .2 );
}

.branding {
	position: absolute;
	top: 55%;
	left: 45px;
	transform: translate(0, -50%);
	background: url(#{$img-path}logo.png);
	background-size: 18.75rem 4.3125rem;
	height: 4.3125rem;
	width: 18.75rem;
	cursor: pointer;
}

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
