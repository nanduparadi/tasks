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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataComponent } from './data/data.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestComponent } from './test/test.component';
import { ThomeComponent } from './thome/thome.component';
import { TaboutComponent } from './tabout/tabout.component';



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
    UsersComponent,
    DashboardComponent,
    ChartComponent,
    ProductManagementComponent,
    DataComponent,
    MyTaskComponent,
    TestComponent,
    ThomeComponent,
    TaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
