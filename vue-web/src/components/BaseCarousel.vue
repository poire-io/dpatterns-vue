<template>
<b-carousel id="carousel" v-model="slide" :interval="interval" controls indicators background="#ababab" img-width="1920" :img-height="height" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
	<b-carousel-slide :caption="card.title" v-for="card in cardData" :key="card.id">
		<img
		slot="img"
		class="d-block img-fluid w-100"
		width="1920"
		:height="height"
		:src="card.imgSource"
		alt="image slot"
		>
		<p>{{card.description}}</p>
		<p class="contact-info">Contact: <span>{{card.contact}}</span></p>
	</b-carousel-slide>
</b-carousel>
</template>

<script>
export default {
	data () {
		return {
			height: 100,
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
	border: .0625rem solid darken( $light-gray, 60% );
}
</style>
