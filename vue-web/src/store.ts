import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		serviceErrors: '',
		categories: [],
		subCategories: [],
		appDetails: [],
	},
	mutations: {
		SET_SERVICE_ERRORS (state, errors) {
			/* eslint no-param-reassign: "error" */
			state.serviceErrors = errors;
		},
		SET_CARD_CATEGORIES (state, categories) {
			/* eslint no-param-reassign: "error" */
			state.categories = categories;
		},
		SET_CARD_SUB_CATEGORIES (state, subCategories) {
			/* eslint no-param-reassign: "error" */
			state.subCategories = subCategories;
		},
		SET_CARD_APP_DETAILS (state, appDetails) {
			/* eslint no-param-reassign: "error" */
			state.appDetails = appDetails;
		},
	},
});
