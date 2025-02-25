import { Component } from "@angular/core";
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-next-patient",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./next-patient.component.html",
	styleUrl: "./next-patient.component.scss",
})
export class NextPatientComponent {}
