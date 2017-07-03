import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import {Router} from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'app-employees',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    pageTitle = 'Employee List';
    isAdd = false;
    imageWidth = 50;
    imageMargin = 2;
    ShowImage = false;
    listFilter: string;
    errorMessage: string;
    employees: IEmployee[];
    currentEmployee: IEmployee = {ID: null,
    Name: '',
    Email: '',
    PhoneNumber: null,
    Status: '',
    Grade: null,
    Salary: null,
    imageUrl: null};
    constructor(private _employeeService: EmployeeService,
                private _router: Router) {
    }

   addEmployee(): void {
     this._employeeService.addEmployee(this.currentEmployee)
     .subscribe(() => {console.log('Employee ${this.currentEmployee.Name} saved successfully');
                     this._router.navigateByUrl('/employees'); },
     (error: any) => this.errorMessage = <any>error);
     this.isAdd = !this.isAdd;
   }

    toggleImage(): void {
        this.ShowImage = !this.ShowImage;
    }

    ngOnInit(): void {
      this.fetchEmployees();
    }

    fetchEmployees(): void {
      this._employeeService.getEmployees()
        .subscribe(employees => this.employees = employees,
                   error => this.errorMessage = <any>error);
    }

    onGradingClicked(message: string): void {
        this.pageTitle = 'Employee List' + message;
    }
}
