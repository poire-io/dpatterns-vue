<template>
<b-carousel
	id="carousel"
	v-model="slide"
	:interval="interval"
	controls
	indicators
	background="#1f1f1f"
	style="text-shadow: 1px 1px 2px #333;"
	@sliding-start="onSlideStart"
	@sliding-end="onSlideEnd"
	>
	<b-carousel-slide :caption="card.app_title" v-for="card in cardData" :key="card.id">
		<img
		slot="img"
		class="d-block img-fluid w-100"
		width="1770"
		height="560"
		:src="card.imgSource"
		alt="image slot"
		>
		<p>{{card.short_description}}</p>
		<p class="contact-info">Contact: <span>{{card.asset_contacts}}</span></p>
	</b-carousel-slide>
</b-carousel>
</template>

<script>
export default {
	data () {
		return {
			height: 50,
			interval: 10000,
			slide: 0,
			sliding: null,
		};
	},
	props: {
		cardData: {
			type: Array,
		},
	},
	methods: {
		onSlideStart (slide) {
			this.sliding = true;
		},
		onSlideEnd (slide) {
			this.sliding = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables'; // core colors, paths

img {
	height: auto;
	width: auto !important;
	margin: 0 auto;
}
</style>
