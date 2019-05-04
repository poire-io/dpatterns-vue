<template>
<PageContainer :title="$attrs.title" :srOnly="true">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col-md-6 col-lg-4 col-xl" v-for="card in cards" :key="card.id">
				<CardService :title="card.title" :icon="card.icon" :iconModifier="card.iconModifier" :variant="card.variant" :buttonText="card.button" :whereTo="'/apps/' + card.id">
					<template slot="body">
						<div class="form-row">
							<div class="col-6">
								<div class="stat" v-if="card.client_list && card.client_list.length > 1">
									{{card.client_list.length}}<span>Clients</span>
								</div>
							</div>
							<div class="col-6">
								<div class="stat" v-if="card.apps_list && card.apps_list.length > 1">
									{{card.apps_list.length}}<span>Apps</span>
								</div>
							</div>
						</div>
					</template>
					<template slot="flipped-body">
						<h2>Applications</h2>
						<ul class="apps">
							<li v-for="app in card.apps_list" :key="app.id">{{app.app_name}}</li>
						</ul>
						<h2>Clients</h2>
						<ul class="apps">
							<li v-for="client in card.client_list" :key="client.id">{{client.client_name}}</li>
						</ul>
					</template>
				</CardService>
			</div>
		</div>
	</template>
</PageContainer>
</template>

<script>

export default {
	computed: {
		cards () {
			return this.$store.state.categories;
		},
	},
};
</script>

<style lang="scss" scoped>
	@import '../assets/scss/variables'; // core colors, paths

	.stat {
		padding: 0 0.625rem 0.625rem 0.625rem;
		border: 0.0625rem solid darken($light_gray, 5%);
		background: $light_gray;
		font-size: 3rem;
		display: block;
		margin: 0;
		span {
			font-size: 1rem;
			display: block;
		}
	}

	.apps {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			text-align: left;
			margin: 1.2rem 0;
			padding-left: .625rem;
			line-height: 1.4rem;
			font-size: 1.1rem;
		}
	}

	h2 {
		display: block;
		padding: .3125rem;
		border: 0.0625rem solid darken($light_gray, 5%);
		background: $light_gray;
		margin: 1.25rem -1rem 0 0;
		&:first-of-type {
			margin-top: 0;
		}
	}
</style>
