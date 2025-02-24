import { Injectable } from "@angular/core";
import { ThemeEnum } from "../model/enums/theme";
import { CookieService } from "ngx-cookie-service";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	constructor(private cookie: CookieService) {}

	toggleTheme() {
		if (document.body.classList.contains(ThemeEnum.LIGHT)) {
			this.applyTheme(ThemeEnum.DARK);
		} else {
			this.applyTheme(ThemeEnum.LIGHT);
		}
	}

	applyTheme(theme: ThemeEnum) {
		if (theme == ThemeEnum.DARK) {
			document.body.classList.remove(ThemeEnum.LIGHT);
			document.body.classList.add(ThemeEnum.DARK);
		} else {
			document.body.classList.remove(ThemeEnum.DARK);
			document.body.classList.add(ThemeEnum.LIGHT);
		}
		// refresh cookie
		this.cookie.set("theme", theme, 90);
	}

	initTheme() {
		let theme = this.cookie.get("theme") as ThemeEnum;
		if (!this.isValidTheme(theme)) {
			theme = ThemeEnum.LIGHT;
		}

		this.applyTheme(theme);
	}

	isValidTheme(theme: ThemeEnum) {
		return theme == ThemeEnum.LIGHT || theme == ThemeEnum.DARK;
	}
}
