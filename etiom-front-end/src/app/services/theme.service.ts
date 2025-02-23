import { Injectable } from "@angular/core";
import { ThemeEnum } from "../model/enums/theme";
import { CookieService } from "ngx-cookie-service";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	private currentTheme = ThemeEnum.LIGHT;

	constructor(private cookie: CookieService) {}

	toggleTheme() {
		const newTheme = this.currentTheme == ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
		document.body.classList.toggle(newTheme);
		this.currentTheme = newTheme;

		this.cookie.set("theme", newTheme, 90);
	}

	initTheme() {
		let theme = this.cookie.get("theme") as ThemeEnum;
		if (!this.isValidTheme(theme)) {
			theme = ThemeEnum.LIGHT;
		}

		document.body.classList.add(theme);
		this.currentTheme = theme;

		// refresh cookie
		this.cookie.set("theme", theme, 90);
	}

	isValidTheme(theme: ThemeEnum) {
		return theme == ThemeEnum.LIGHT || theme == ThemeEnum.DARK;
	}
}
