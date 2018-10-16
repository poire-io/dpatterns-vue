import Dashboard from './Dashboard';
import FormControls from './FormControls';

export const
    routes = [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/form-controls',
        name: 'FormControls',
        component: FormControls
      }
    ];