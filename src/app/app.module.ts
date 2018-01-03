import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LeftNav } from './shared/left-nav';
import { PageHeader } from './shared/page-header';
import { PageError } from './shared/page-error';
import { IntroductionDashboard } from './pages/introduction.dashboard';
import { StructureDashboard } from './pages/structure.dashboard';
import { StyleDashboard } from './pages/style.dashboard';
import { ComponentsDashboard } from './pages/components.dashboard';
import { MessagesDashboard } from './pages/messages.dashboard';
import { NavigationDashboard } from './pages/navigation.dashboard';
import { ApplicationHeaderComponent } from './shared/application-header/application-header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { TableComponent } from './sub-components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNav,
    PageHeader,
    PageError,
    IntroductionDashboard,
    StructureDashboard,
    StyleDashboard,
    ComponentsDashboard,
    MessagesDashboard,
    NavigationDashboard,
    ApplicationHeaderComponent,
    NavigationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
