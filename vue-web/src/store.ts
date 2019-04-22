import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		serviceErrors: '',
	},
	mutations: {
		SET_SERVICE_ERRORS (state, errors) {
			/* eslint no-param-reassign: "error" */
			state.serviceErrors = errors;
		},
	},
});
