import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { DataComponent } from './data/data.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { TestComponent } from './test/test.component';
import { ThomeComponent } from './thome/thome.component';
import { TaboutComponent } from './tabout/tabout.component';

const routes: Routes = [{path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path:'project',component:ProjectManagementComponent},
  {path: 'users',component:UsersComponent},
  { path: 'admin', component: AdministrationComponent },
  {path: 'dash', component:DashboardComponent},
  { path: 'chart', component: ChartComponent },
  {path: 'data',component:DataComponent},
  {path : 'product-management',component:ProductManagementComponent},
  {path:"ap",component:ProjectsComponent},
  {path:"task",component:MyTaskComponent},
  {path:'test',component:TestComponent},
  {path: 'home',component:ThomeComponent},
  {path:'about',component:TaboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

 }
