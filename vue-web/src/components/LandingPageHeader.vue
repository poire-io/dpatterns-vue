<template>
<div class="splash">
	<div class="branding"><span class="sr-only">govConnect Launch Pad</span></div>
	<div class="close" @click="goToDetails('/')"><em class="fa fa-times-circle"><span class="sr-only">Close Application</span></em></div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables'; // core colors, paths
$img-path: "../assets/";

.splash {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 20rem;
	background: url(#{$img-path}splash.jpg) fixed 50% 700px;
}

.branding {
	position: absolute;
	top: 50%;
	left: 50px;
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
</style>
