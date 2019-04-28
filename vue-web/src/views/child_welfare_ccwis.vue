<template>
<PageContainer splashHeight="18rem" splashBgHeight="700px" :title="$attrs.title" :srOnly="true">
	<template slot="pageBody">
		<div class="row ml-3 mr-3">
			<div class="col">
				<BaseCarousel :cardData="details" />
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
			.get('http://10.10.60.129:4000/child_welfare')
			.then((response) => {
				this.details = response.data;
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
			details: [],
		};
	},
};
</script>
