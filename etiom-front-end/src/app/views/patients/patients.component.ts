import { Component } from "@angular/core";
import { CustomTableComponent } from "ngx-custom-table";

@Component({
	selector: "app-patients",
	standalone: true,
	imports: [CustomTableComponent],
	templateUrl: "./patients.component.html",
	styleUrl: "./patients.component.scss",
})
export class PatientsComponent {}
