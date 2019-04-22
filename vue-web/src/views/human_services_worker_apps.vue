<template>
<PageContainer :title="$attrs.title" pageBodyHeight="510px">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="card in cards" :key="card.id">
				<CardService :title="card.title" :icon="card.icon" :iconModifier="card.iconModifier" :variant="card.variant" :buttonText="card.button" :whereTo="card.detailsURL" :isSubCard="true" :cardBranding="card.cardBranding">
					<template slot="body">
						<p>{{card.description}}</p>
					</template>
					<template slot="flipped-body">
						<p>{{card.detailed_description}}</p>
					</template>
				</CardService>
			</div>
		</div>
	</template>
</PageContainer>
</template>

<script>
const axios = require('axios');

export default {
	mounted () {
		axios
			.get('http://192.168.1.22:4000/hswa_types')
			.then((response) => {
				this.cards = response.data;
			})
			.catch((response, err) => {
				if (response !== null) {
					this.$store.commit('SET_SERVICE_ERRORS', response.message);
				} else {
					this.$store.commit('SET_SERVICE_ERRORS', err.message);
				}
			});
	},
	data () {
		return {
			cards: [],
		};
	},
};
</script>
