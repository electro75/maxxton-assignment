import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../../services/employees';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public allEmployees = EMPLOYEES;

  constructor(private __empService: EmployeeService) {
    this.__empService.getAllEmployees();
  }

  ngOnInit(): void {
  }



}
