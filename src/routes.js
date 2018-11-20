import Introduction from './pages/Introduction';
import FormControls from './pages/FormControls';
import Containers from './pages/Containers';
import Tables from './pages/Tables';
import Messages from './pages/Messaging';

export const
    routes = [
      {
        path: '/',
        name: 'Introduction',
        component: Introduction
      },
      {
        path: '/form-controls',
        name: 'Form Controls',
        component: FormControls
      },
      {
        path: '/containers',
        name: 'Containers',
        component: Containers
      },
      {
        path: '/tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: '/messages',
        name: 'Messaging',
        component: Messages
      }
    ];