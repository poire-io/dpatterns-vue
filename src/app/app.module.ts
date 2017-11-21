import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { GlobalHeader } from './shared/header';
import { GlobalFooter } from './shared/footer';
import { LeftNav } from './shared/left-nav';
import { PageHeader } from './shared/page-header';
import { PageError } from './shared/page-error';
import { IntroductionDashboard } from './dashboards/introduction.dashboard';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeader,
    GlobalFooter,
    LeftNav,
    PageHeader,
    PageError,
    IntroductionDashboard
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
