<template>
<PageContainer>
	<LandingPageHeader />
	<div class="page-body">
		<div class="row ml-3 mr-3 mb-3 sr-only">
			<div class="col">
				<h1>{{$attrs.title}}</h1>
			</div>
		</div>
		<div class="row ml-3 mr-3">
			<div class="col">
				<b-carousel id="carousel-1" v-model="slide" :interval="interval" controls indicators background="#ababab" img-width="1920" :img-height="height" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
					<b-carousel-slide :caption="detail.title" v-for="detail in details" :key="detail.id">
						<p>{{detail.description}}</p>
						<img
						slot="img"
						class="d-block img-fluid w-100"
						width="1920"
						:height="height"
						:src="detail.imgSource"
						alt="image slot"
						>
					</b-carousel-slide>
				</b-carousel>
			</div>
		</div>
		<div class="row">
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
			interval: 2000,
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
.page-body {
	margin-top: 248px;
}
</style>
