import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public displayEmployees: Employee[];
  public initialData: Employee[];  // to store unfilered data for quick reset
  public searchTerm = '';

  constructor(private __empService: EmployeeService) {
    
  }

  ngOnInit(): void {
    this.displayEmployees = this.__empService.getAllEmployees();
    this.initialData = this.displayEmployees.map(emp => emp);

  }

  searchfns() {        
    if(this.searchTerm.length > 0) {
      this.displayEmployees = this.displayEmployees.filter(emp => {
        return emp.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      })
    } else {
      this.displayEmployees = this.initialData.map( emp => emp);
    }
  }

  // sorting function.
  // type: string (name of the propety to be sorted with ('name' || 'exp_years'))
  // direction: number (ascending (1) || descending (0))
  sortEmp(type, direction) {          
    if(direction) {
      this.displayEmployees.sort(function(a, b) {
        if(a[type] < b[type]) { return -1; }
        if(a[type] > b[type]) { return 1; }
        return 0;
      })
    } else {
      this.displayEmployees.sort(function(a, b) {
        if(a[type] > b[type]) { return -1; }
        if(a[type] < b[type]) { return 1; }
        return 0;
      })
    }

  }

  removeEmp(dept) {
    this.displayEmployees = this.displayEmployees.filter(emp => emp.department !== dept);
  }


  filterExp(num) {
    this.displayEmployees = this.displayEmployees.filter(emp => emp.exp_years > num);
  }

  resetArr() {
    this.displayEmployees = this.initialData.map(emp => emp);
    this.searchTerm = '';
  }

}
