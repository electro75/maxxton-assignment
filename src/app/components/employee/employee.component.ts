import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { Summary } from '../../interfaces/summary';
import {EmployeeService} from '../../services/employee.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild("summaryContent", {static: false}) summaryModal;

  public displayEmployees: Employee[];
  public initialData: Employee[];  // to store unfilered data for quick reset
  public searchTerm = '';
  public summaryArr: Summary[] = []; // to store the departments and number of employees in each
  public expFilterFlag = false;
  

  constructor(private __empService: EmployeeService,
              private __modal : NgbModal) {
    
  }

  ngOnInit(): void {
    this.displayEmployees = this.__empService.getAllEmployees();
    this.initialData = this.displayEmployees.map(emp => emp);

    this.getSummary();
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

  // removes employees from the specified department ('Development')
  // dept: String
  removeEmp(dept) {
    this.displayEmployees = this.displayEmployees.filter(emp => emp.department !== dept);
  }


  // uses filter function to check the years of experience of employees 
  // against the given value (2)
  // num : number
  filterExp(num) {
    this.displayEmployees = this.displayEmployees.filter(emp => emp.exp_years > num);
    this.expFilterFlag = true;
  }

  getSummary() {    
    this.displayEmployees.forEach(emp => {
      let dept_found = false
      this.summaryArr.forEach(summ => {
        if(summ.dept === emp.department) {
          summ.num_emp++;
          dept_found = true
        }
      })

      if(!dept_found) {
        this.summaryArr.push({
          dept : emp.department,
          num_emp : 1
        })
      }
    })    
  }

  displaySummary() {
    this.__modal.open(this.summaryModal).result.then(() =>{}, ()=> {});
  }

  // simple reset function to revert to initial data after filters are applied.
  resetArr() {
    this.displayEmployees = this.initialData.map(emp => emp);
    this.searchTerm = '';
    this.expFilterFlag = false;
  }

}
