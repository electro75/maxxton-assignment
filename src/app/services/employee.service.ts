import {EMPLOYEES} from './employees';
import differenceInYears from 'date-fns/differenceInYears'
import { Employee } from '../interfaces/employee';

export class EmployeeService {
    
    private allEmployees:Employee[];

    constructor() { 
        this.allEmployees = EMPLOYEES.map((emp) => {
            // number of years are calculated and initilised into each employee.
            // this eases the calculation when the actual function is called.
            
            let yrs = differenceInYears(new Date(), new Date(emp.joining_date))
            return {
                ...emp,
                exp_years : yrs
            }
        });    
    }

    getAllEmployees() {     
        return this.allEmployees;   
    }

}