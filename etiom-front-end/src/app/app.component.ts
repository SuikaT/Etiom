import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./views/header/header.component";
import { MenuComponent } from "./views/menu/menu.component";
import { RouterModule } from "@angular/router";
import { ThemeService } from "./services/theme.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, HeaderComponent, MenuComponent, RouterModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "etiom-front-end";

	constructor(private theme: ThemeService) {}

	ngOnInit(): void {
		this.theme.initTheme();
	}
}
