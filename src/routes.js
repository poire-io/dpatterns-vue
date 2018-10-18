import Dashboard from './pages/Dashboard';
import FormControls from './pages/FormControls';

export const
    routes = [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/form-controls',
        name: 'Form Controls',
        component: FormControls
      }
    ];