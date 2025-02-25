import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CustomTableComponent } from "ngx-custom-table";

@Component({
	selector: "app-patient-list",
	standalone: true,
	imports: [CustomTableComponent, MatCardModule],
	templateUrl: "./patient-list.component.html",
	styleUrl: "./patient-list.component.scss",
})
export class PatientListComponent {}
