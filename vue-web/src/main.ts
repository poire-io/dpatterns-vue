import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Custom CSS for project.
import './styles.scss';

// Custom Components
import PageContainer from '@/components/PageContainer.vue';
import LandingPageHeader from '@/components/LandingPageHeader.vue';
import PageHeader from '@/components/PageHeader.vue';
import CardService from '@/components/CardService.vue';

Vue.component('PageContainer', PageContainer);
Vue.component('LandingPageHeader', LandingPageHeader);
Vue.component('PageHeader', PageHeader);
Vue.component('CardService', CardService);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* ++++ Mixins Go Here ++++ */
Vue.mixin({
	methods: {
		goToDetails (route) {
			this.$router.push(route);
		},
	},
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
