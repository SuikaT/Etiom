import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./views/header/header.component";
import { MenuComponent } from "./views/menu/menu.component";
import { RouterModule } from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { ThemeEnum } from "./model/enums/theme";
import { CookieService } from "ngx-cookie-service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, HeaderComponent, MenuComponent, RouterModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "etiom-front-end";

	constructor(private theme: ThemeService, private cookie: CookieService) {}

	ngOnInit(): void {
		this.theme.initTheme();
	}
}
