import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId;
  public employeeDetails: Employee;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private __empService: EmployeeService
    ) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    this.getDetails()
  }

  getDetails() {
    this.employeeDetails = this.__empService.getSingleEmployee(this.employeeId);    
    if(!this.employeeDetails) {
      // redirect to error component      
      this.router.navigate(['/not-found']) 
    }
  }

}
