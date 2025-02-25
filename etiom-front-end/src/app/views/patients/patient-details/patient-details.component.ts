import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-patient-details",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./patient-details.component.html",
	styleUrl: "./patient-details.component.scss",
})
export class PatientDetailsComponent {}
