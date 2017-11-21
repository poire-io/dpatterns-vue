import { Routes, RouterModule } from '@angular/router';

import { IntroductionDashboard } from './dashboards/introduction.dashboard';

const appRoutes: Routes = [
    {
        path: 'introduction',
        component: IntroductionDashboard,
        data: {
            page_header: "Introduction",
            main: true
        }
    },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
