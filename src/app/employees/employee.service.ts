import {Injectable} from '@angular/core';
import {IEmployee} from './employee';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    private _employeeUrl = 'http://localhost:8081/employees';
    private _employeeIDUrl = 'http://localhost:8081/employee';
 constructor(private _http: Http) {
 }
   getEmployees(): Observable<IEmployee[]> {
       return  this._http.get(this._employeeUrl)
       .map((response: Response) => <IEmployee[]>response.json())
       .do((data) => console.log(data))
       .catch(this.handleError);
   }

   getEmployee(id: number): Observable<IEmployee> {
       return this._http.get(this._employeeUrl + '/' + id)
       .map((response: Response) => <IEmployee> response.json())
       .do((data) => console.log(data))
       .catch(this.handleError);
   }

   addEmployee(employee: IEmployee): Observable<IEmployee> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.createEmployee(employee, options);
   }

   private createEmployee(employee: IEmployee, options: RequestOptions): Observable<IEmployee>{

       //const body = JSON.stringify(employee);
        return this._http.post(this._employeeIDUrl, employee, options )
              .map((response: Response) => response.json())
              .do(data => console.log('createEmployee' + JSON.stringify(data) ))
              .catch(this.handleError);
   }

   private handleError(error: Response)
   {
      console.log(error);
      return Observable.throw(error.json().error || 'Server error');
   }
}