<template>
<PageContainer>
	<LandingPageHeader splashHeight="18rem" splashBgHeight="700px" />
	<div class="page-body">
		<PageHeader :title="$attrs.title" />
		<div class="row ml-3 mr-3">
			<div class="col">
				<b-carousel id="carousel-1" v-model="slide" :interval="interval" controls indicators background="#ababab" img-width="1920" :img-height="height" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
					<b-carousel-slide :caption="detail.title" v-for="detail in details" :key="detail.id">
						<img
						slot="img"
						class="d-block img-fluid w-100"
						width="1920"
						:height="height"
						:src="detail.imgSource"
						alt="image slot"
						>
						<p>{{detail.description}}</p>
						<p class="contact-info">Contact: <span>{{detail.contact}}</span></p>
					</b-carousel-slide>
				</b-carousel>
			</div>
		</div>
	</div>
</PageContainer>
</template>

<script>
const axios = require('axios');

export default {
	mounted () {
		axios
			.get('http://192.168.1.22:4000/integrated_eligibility')
			.then((response) => {
				this.details = response.data;
			})
			.catch((err) => {
				this.error = err.data;
			});
	},
	data () {
		return {
			details: [],
			height: 100,
			interval: 10000,
			slide: 0,
			sliding: null,
		};
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

.page-body {
	margin-top: 248px;
}
img {
	border: .0625rem solid darken( $light-gray, 60% );
}
</style>
