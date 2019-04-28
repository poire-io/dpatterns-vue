<template>
<PageContainer splashHeight="18rem" splashBgHeight="43.75rem" :title="subCategorySelected.title" :srOnly="true">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col">
				<BaseCarousel :cardData="selectedCard" />
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
			stuff: [],
			id: null,
		};
	},
	computed: {
		subCategorySelected () {
			const subCategory = this.$store.state.subCategories.find(subCategory => {
				return subCategory.id === this.id;
			});
			return subCategory || {};
		},
		selectedCard () {
			const card = this.$store.state.appDetails.filter(card => {
				return card.sub_category === this.id;
			});
			return card || {}
        }
	},
};
</script>