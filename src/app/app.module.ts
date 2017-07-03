import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EmailConcatPipe } from './app.email-concat.pipe';
import { AgeMultiplier } from './app.age-multiplier.pipe';
import { AppComponent } from './app.component';
import { EmployeeListComponent} from './employees/employee-list.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { StarComponent } from './shared/star.component';
import { EmployeeDetailComponent } from './employees/employee-detail.component';
import { WelcomeComponent } from './welcome/welcome.component' ;

@NgModule({
  declarations: [
    AppComponent,
    EmailConcatPipe,
    AgeMultiplier,
    EmployeeListComponent,
    EmployeeFilterPipe,
    StarComponent,
    EmployeeDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: 'employees', component: EmployeeListComponent },
     { path: 'employees/:id', component: EmployeeDetailComponent},
     { path: 'welcome', component: WelcomeComponent},
     { path: '', redirectTo: 'welcome', pathMatch: 'full'},
     { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
