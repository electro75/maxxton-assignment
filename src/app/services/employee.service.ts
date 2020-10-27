import {EMPLOYEES} from './employees';
import differenceInYears from 'date-fns/differenceInYears'

export class EmployeeService {

    constructor() { }

    private allEmployees = EMPLOYEES;

    getExp() {
        this.allEmployees.map((emp) => {
            let yrs = differenceInYears(new Date(), new Date(emp.joining_date))
            console.log(yrs);
        })
    }

    getAllEmployees() {
        this.getExp();
    }

}