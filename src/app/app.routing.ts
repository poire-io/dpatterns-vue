import { Routes, RouterModule } from '@angular/router';

import { IntroductionDashboard } from './pages/introduction.dashboard';
import { StructureDashboard } from './pages/structure.dashboard';
import { StyleDashboard } from './pages/style.dashboard';
import { ComponentsDashboard } from './pages/components.dashboard';
import { MessagesDashboard } from './pages/messages.dashboard';
import { NavigationDashboard } from './pages/navigation.dashboard';
import { PageError } from './shared/page-error';

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
        path: 'components',
        component: ComponentsDashboard,
        data: {
            page_header: "Components"
        }
    },
    {
        path: 'messages',
        component: MessagesDashboard,
        data: {
            page_header: "Messages & Notifications"
        }
    },
    {
        path: 'navigation',
        component: NavigationDashboard,
        data: {
            page_header: "Navigation"
        }
    },
    {
        path: 'errors',
        component: IntroductionDashboard,
        data: {
            page_header: "Introduction",
            errors: "Sample errors.",
            warnings: "Sample warnings.",
            success: "Sample success message.",
            info: "Sample notice message."
        }
    },
    {
        path: '',
        redirectTo: '/introduction',
        pathMatch: 'full'
    },    
    {
        path: '**',
        component: PageError,
        data: {
            page_header: "Page Not Found",
            errors: "The page you are trying to reach was not found. Please check your URL or link and try again."
        }
    }
];

export const routing = RouterModule.forRoot(appRoutes);
