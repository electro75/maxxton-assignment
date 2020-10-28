import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'all-employees', component: EmployeeComponent },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
    { path:'', redirectTo: 'all-employees', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }