import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CustomTableComponent } from "ngx-custom-table";
import { Patient } from "../../../model/interfaces/Patient";
import { patientsTest } from "../../../test/patient-dummy";

@Component({
    selector: "app-patient-list",
    standalone: true,
    imports: [CustomTableComponent, MatCardModule],
    templateUrl: "./patient-list.component.html",
    styleUrl: "./patient-list.component.scss",
})
export class PatientListComponent {
    displayedFields = ["lastname", "firstname", "age", "phone", "birthDate", "adress", "socialWelfare", "healthInsurance", "appointmentCount"];

    columnTitles = new Map<string, string>([
        ["lastname", "Nom"],
        ["firstname", "Prénom"],
        ["age", "Age"],
        ["phone", "Téléphone"],
        ["birthDate", "Date de naissance"],
        ["adress", "Adresse"],
        ["socialWelfare", "Sécurité sociale"],
        ["healthInsurance", "Mutuelle"],
        ["appointmentCount", "Nombre de rendez-vous"],
    ]);

    patients: Patient[] = patientsTest;
}
