import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { AdministrationComponent } from './administration/administration.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ProjectsComponent } from './projects/projects.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TimesheetComponent,
    ProjectManagementComponent,
    NavbarComponent,
    SuccessModalComponent,
    AdministrationComponent,
    SidePanelComponent,
    ProjectsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
