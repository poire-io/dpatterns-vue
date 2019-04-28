<template>
<div id="app">
    <form name="frmMain" id="frmMain">
        <main class="container-fluid main-content" role="main">
            <transition name="fade">
                <router-view />
            </transition>
        </main>
    </form>
</div>
</template>

<script>
const axios = require('axios');

export default {
	mounted () {
		axios
			.get('./static_data/data.json')
			.then((response) => {
				this.$store.commit('SET_CARD_CATEGORIES', response.data.categories);
				this.$store.commit('SET_CARD_SUB_CATEGORIES', response.data.sub_categories);
				this.$store.commit('SET_CARD_APP_DETAILS', response.data.app_details);
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
