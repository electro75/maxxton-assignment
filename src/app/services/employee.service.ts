import {EMPLOYEES} from './employees';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInDays from 'date-fns/differenceInDays';
import { Employee } from '../interfaces/employee';

export class EmployeeService {
    
    private allEmployees:Employee[];

    constructor() { 
        this.allEmployees = EMPLOYEES.map((emp) => {
            // number of years are calculated and initilised into each employee.
            // this eases the calculation when the actual function is called.
            let formattedJoining = this.formatDate(emp.joining_date)
            let yrs = differenceInYears(new Date(), new Date(formattedJoining))
            let totalExp = differenceInDays(new Date(), new Date(formattedJoining))
            return {
                ...emp,                
                totalExp,
                exp_years : yrs,
                joining_date : formattedJoining
                
            }
        });    
    }

    // return original data
    getAllEmployees() {     
        return this.allEmployees;   
    }

    /**
     * returns the details of a single employee from the given id.
     * @param id number
     */
    getSingleEmployee(id) {        
        if(this.allEmployees.filter(emp => emp.id === id).length > 0) {            
            return this.allEmployees.filter(emp => emp.id === id)[0]
        } else {
            return null
        }
        
    }

    /**
     * format given in problem statement is invalid for new Date().
     * function is used to format the date to MM/DD/YYYY from the format given in problem statement
     * @param dt : String.
     */
    formatDate(dt) {
        let tempDateArr =  dt.split('/');
        return `${tempDateArr[1]}/${tempDateArr[0]}/${tempDateArr[2]}`
    }

}