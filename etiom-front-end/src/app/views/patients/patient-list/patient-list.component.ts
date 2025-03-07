import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CustomTableComponent } from "ngx-custom-table";
import { Patient } from "../../../model/interfaces/Patient";

@Component({
    selector: "app-patient-list",
    standalone: true,
    imports: [CustomTableComponent, MatCardModule],
    templateUrl: "./patient-list.component.html",
    styleUrl: "./patient-list.component.scss",
})
export class PatientListComponent {
    displayedFields = ["lastname", "firstname", "age", "phone", "birthDate", "adress", "socialWelfare", "healthInsurance", "appointmentCount"];

    patients: Patient[] = [
        { firstname: "John", lastname: "Doe", age: 25 },
        { firstname: "Jane", lastname: "Smith", age: 30 },
        { firstname: "Alice", lastname: "Johnson", age: 22 },
        { firstname: "Bob", lastname: "Brown", age: 35 },
        { firstname: "Charlie", lastname: "Davis", age: 28 },
        { firstname: "David", lastname: "Martinez", age: 40 },
        { firstname: "Eve", lastname: "Miller", age: 27 },
        { firstname: "Frank", lastname: "Wilson", age: 33 },
        { firstname: "Grace", lastname: "Moore", age: 24 },
        { firstname: "Hannah", lastname: "Taylor", age: 29 },
        { firstname: "Ivan", lastname: "Anderson", age: 36 },
        { firstname: "Jack", lastname: "Thomas", age: 32 },
        { firstname: "Kathy", lastname: "Jackson", age: 23 },
        { firstname: "Liam", lastname: "White", age: 26 },
        { firstname: "Maggie", lastname: "Harris", age: 31 },
        { firstname: "Nathan", lastname: "Clark", age: 38 },
        { firstname: "Olivia", lastname: "Lewis", age: 21 },
        { firstname: "Paul", lastname: "Young", age: 27 },
        { firstname: "Quincy", lastname: "Walker", age: 39 },
        { firstname: "Rachel", lastname: "Allen", age: 33 },
        { firstname: "Sam", lastname: "Scott", age: 28 },
        { firstname: "Tina", lastname: "Adams", age: 30 },
        { firstname: "Ursula", lastname: "Baker", age: 41 },
        { firstname: "Victor", lastname: "Gonzalez", age: 37 },
        { firstname: "Wendy", lastname: "Nelson", age: 25 },
        { firstname: "Xander", lastname: "Carter", age: 34 },
        { firstname: "Yvonne", lastname: "Mitchell", age: 29 },
        { firstname: "Zachary", lastname: "Perez", age: 22 },
        { firstname: "Aaron", lastname: "Roberts", age: 30 },
        { firstname: "Bella", lastname: "Evans", age: 26 },
        { firstname: "Catherine", lastname: "Graham", age: 32 },
    ];
}
