import Vue from 'vue';
import Router from 'vue-router';
import Splash from './views/splash.vue';
import Home from './views/home.vue';
import Apps from './views/apps.vue';
import Details from './views/app_details.vue';
import IntegratedEligibility from './views/integrated_eligibility.vue';
import ChildWelfareCCWIS from './views/child_welfare_ccwis.vue';

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
			path: '/apps/:id',
			name: 'apps',
			component: Apps,
		},
		{
			path: '/details/:id',
			name: 'details',
			component: Details,
		},
		{
			path: '/integratedeligibility',
			name: 'integratedeligibility',
			component: IntegratedEligibility,
			props: { title: 'Integrated Eligibility' },
		},
		{
			path: '/childwelfareccwis',
			name: 'childwelfareccwis',
			component: ChildWelfareCCWIS,
			props: { title: 'Child Welfare CCWIS' },
		},
	],
});
