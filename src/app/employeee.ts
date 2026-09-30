import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class EmployeeeService {
    employees = [
        {id: 1,name:'Pavithra',role:'Developer'},
        {id:2,name:'ramu',role:'Tester'},
        {id:3,name:'sita',role:'Developer'}
    ];
    getEmployees(){
        return this.employees;
    }
}
