import Vue from 'vue';
import Router from 'vue-router';
import Splash from './views/splash.vue';
import Home from './views/home.vue';
import Apps from './views/apps.vue';
import Details from './views/app_details.vue';

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
	],
});
