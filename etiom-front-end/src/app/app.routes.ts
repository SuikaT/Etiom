import { Routes } from "@angular/router";
import { CalendarComponent } from "./views/calendar/calendar.component";
import { PatientsComponent } from "./views/patients/patients.component";

export const routes: Routes = [
	{ path: "calendar", component: CalendarComponent },
	{ path: "patients", component: PatientsComponent },
	{ path: "", redirectTo: "patients", pathMatch: "full" },
];
