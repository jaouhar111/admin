import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { ClasseroomComponent } from './pages/classeroom/classeroom.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentsComponent } from './pages/students/students.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { EmpAdmissionComponent } from './pages/emp-admission/emp-admission.component'; 


import { FormsModule } from '@angular/forms';
import { AddClaComponent } from './pages/add-cla/add-cla.component';
import { AddMtaComponent } from './pages/add-mta/add-mta.component';
import { MatiereComponent } from './pages/matiere/matiere.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { AttEmpComponent } from './pages/att-emp/att-emp.component';
import { CompteComponent } from './pages/compte/compte.component';
import { ClasseChartsComponent } from './pages/classe-charts/classe-charts.component';
import { PerceptionComponent } from './pages/perception/perception.component';
import { SalaireComponent } from './pages/salaire/salaire.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classe', component: ClasseroomComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'matiere', component: MatiereComponent },
  { path: 'empads', component: EmpAdmissionComponent },
  { path: 'addcla', component: AddClaComponent },
  { path: 'addmta', component: AddMtaComponent },
  { path: 'att', component: AttendanceComponent },
  { path: 'att-emp', component: AttEmpComponent },
  { path: 'salaire', component: SalaireComponent },
  { path: 'perception/:id', component: PerceptionComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClasseroomComponent,
    ProfileComponent,
    StudentsComponent,
    EmployeeComponent,
    AdmissionComponent,
    EmpAdmissionComponent,
    AddClaComponent,
    AddMtaComponent,
    MatiereComponent,
    AttendanceComponent,
    AttEmpComponent,
    CompteComponent,
    ClasseChartsComponent,
    PerceptionComponent,
    SalaireComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
