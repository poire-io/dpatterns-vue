<template>
<PageContainer>
	<div class="splash">
		<div class="branding" @click="goToDetails('home')"><span class="sr-only">govConnect Launch Pad</span></div>
	</div>
</PageContainer>
</template>

<style lang="scss" scoped>
$img-path: "../assets/images/";

.splash {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: url(#{$img-path}splash.jpg) fixed center;
}

.branding {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: url(#{$img-path}logo.png) no-repeat;
	height: 94px;
	width: 411px;
	cursor: pointer;
	animation: fadein 3s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

</style>
