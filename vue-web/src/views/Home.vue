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
			<div class="col-md-6 col-lg-4 col-xl" v-for="card in cards" :key="card.id">
				<CardService :title="card.title" :icon="card.icon" :iconModifier="card.iconModifier" :variant="card.variant" :buttonText="card.button" :whereTo="card.detailsURL">
					<template slot="body">
						<p>{{card.description}}</p>
					</template>
					<template slot="flipped-body">
						<p>{{card.detailed_description}}</p>
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
			.get('http://192.168.1.22:4000/main_types')
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
.page-body {
	margin-top: 520px;
}
</style>
