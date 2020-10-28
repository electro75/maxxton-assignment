// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,   
    ReactiveFormsModule, 
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
