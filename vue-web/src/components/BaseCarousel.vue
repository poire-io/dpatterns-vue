<template>
<div class="detailed-content">
	<b-carousel
		id="carousel"
		v-model="slide"
		:interval="interval"
		controls
		indicators
		background="#1f1f1f"
		@sliding-start="onSlideStart"
		@sliding-end="onSlideEnd"
		>
		<b-carousel-slide v-for="card in cardData[0].images" :key="card.id">
			<img
			slot="img"
			class="d-block img-fluid w-100"
			:src="card.imgSource"
			alt="image slot"
			>
		</b-carousel-slide>
	</b-carousel>
	<div class="info" v-for="card in cardData" :key="card.id">
		<div class="card-logo" v-if="card.alliance_relationship_1 !== ''" :class="{ salesforce: card.alliance_relationship_1 === 'Salesforce' }"></div>
		<p class="title" v-if="card.app_title !== ''">{{card.app_title}}</p>
		<p class="description" v-if="card.short_description !== ''">{{card.short_description}}</p>
		<p class="implemented" v-if="card.implemented !== ''">Implemented In: <span>{{card.implemented}}</span></p>
		<p class="contact" v-if="card.asset.contacts !== ''">Contact: <span>{{card.asset_contacts}}</span></p>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {
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
