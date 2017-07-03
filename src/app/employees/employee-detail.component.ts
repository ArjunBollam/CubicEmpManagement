import {Component,OnInit} from '@angular/core';
import {IEmployee} from './employee';
import {ActivatedRoute} from '@angular/router';

import { EmployeeService } from './employee.service';

@Component({
   templateUrl: 'employee-detail.component.html',
   providers: [EmployeeService]
})
export class EmployeeDetailComponent {
     pageTitle: string = 'Employee Name';
     employee: IEmployee; 

     constructor(private _route: ActivatedRoute,
                private  _employee: EmployeeService) {
     }

    ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        this.getEmployee(id);
        console.log(this.employee);
    }

    getEmployee(id: number) {
        debugger;
         this._employee.getEmployee(id)
         .subscribe((employee) => this.employee = employee,
                     (error) => console.log(error));
    }
}
