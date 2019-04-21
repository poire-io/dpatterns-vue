import Vue from 'vue';
import Router from 'vue-router';
import Splash from './views/splash.vue';
import Home from './views/home.vue';
import Hswa from './views/human_services_worker_apps.vue';
import IntegratedEligibility from './views/integrated_eligibility.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'splash',
			component: Splash,
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			props: { title: 'Home' },
		},
		{
			path: '/hswa',
			name: 'hswa',
			component: Hswa,
			props: { title: 'Human Services Worker Applications' },
		},
		{
			path: '/integratedeligibility',
			name: 'integratedeligibility',
			component: IntegratedEligibility,
			props: { title: 'Integrated Eligibility' },
		},
	],
});
