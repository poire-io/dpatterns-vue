<template>
<PageContainer>
	<div class="splash">
		<div class="branding"><span class="sr-only">govConnect Launch Pad</span></div>
	</div>
	<div class="page-body">
		<div class="row ml-3 mr-3">
			<div class="col" v-for="card in cards" :key="card.id">
				<CardService :title="card.title" :icon="card.icon" :iconModifier="card.iconModifier" :variant="card.variant">
					<template slot="body">
						<p>{{card.description}}</p>
					</template>
					<template slot="footer">
						<b-button variant="outline-primary">{{card.button}}</b-button>
					</template>
				</CardService>
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
			.get('http://localhost:4000/main_types')
			.then((response) => {
				this.cards = response.data;
			})
			.catch((err) => {
				this.error = err.data;
			});
	},
	data () {
		return {
			cards: [],
		};
	},
};
</script>

<style lang="scss" scoped>
$img-path: "../assets/";

.splash {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 25rem;
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

.page-body {
	margin-top: 430px;
}
</style>
