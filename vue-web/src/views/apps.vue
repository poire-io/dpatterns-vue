<template>
<PageContainer :title="categorySelected.title" pageHeaderStyle="page-body-apps" splashStyle="apps">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="card in selectedCard" :key="card.id">
				<CardService :icon="card.icon" :iconModifier="card.iconModifier" :variant="card.variant" :buttonText="card.button" :whereTo="'/details/' + card.id" :isSubCard="true" :cardBranding="card.cardBranding">
					<template slot="body">
						<div class="row">
							<div class="col">
								<h2 v-html="card.title" />
							</div>
						</div>
					</template>
					<template slot="flipped-body">
						<p>{{card.short_description}}</p>
					</template>
				</CardService>
			</div>
		</div>
	</template>
</PageContainer>
</template>

<script>
export default {
	mounted () {
		this.id = this.$route.params.id;
	},
	data () {
		return {
			id: null,
		};
	},
	computed: {
		categorySelected () {
			const category = this.$store.state.categories.find(category => category.id === this.id);
			return category || {};
		},
		selectedCard () {
			const card = this.$store.state.subCategories.filter(card => card.category === this.id);
			return card || {};
		},
	},
};
</script>
