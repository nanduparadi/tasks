import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [{path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path:'project',component:ProjectManagementComponent},
  {path: 'admin',component:AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
