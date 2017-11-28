import { Routes, RouterModule } from '@angular/router';

import { IntroductionDashboard } from './pages/introduction.dashboard';
import { StructureDashboard } from './pages/structure.dashboard';
import { StyleDashboard } from './pages/style.dashboard';

const appRoutes: Routes = [
    {
        path: 'introduction',
        component: IntroductionDashboard,
        data: {
            page_header: "Introduction"
        }
    },
    {
        path: 'structure',
        component: StructureDashboard,
        data: {
            page_header: "Structure & Layout"
        }
    },
    {
        path: 'style',
        component: StyleDashboard,
        data: {
            page_header: "Style"
        }
    },
    {
        path: 'messages',
        component: IntroductionDashboard,
        data: {
            page_header: "Introduction with Errors",
            errors: "Sample errors.",
            warnings: "Sample warnings.",
            success: "Sample success message.",
            info: "Sample notice message."
        }
    },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
