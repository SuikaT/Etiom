import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { NextPatientComponent } from "./next-patient/next-patient.component";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { PatientDetailsComponent } from "./patient-details/patient-details.component";

@Component({
    selector: "app-patients",
    standalone: true,
    imports: [MatCardModule, NextPatientComponent, PatientListComponent, PatientDetailsComponent],
    templateUrl: "./patients.component.html",
    styleUrl: "./patients.component.scss",
})
export class PatientsComponent {}
