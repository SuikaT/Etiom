import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { ThemeEnum } from "../model/enums/theme";
import { CookieService } from "ngx-cookie-service";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	private renderer: Renderer2;
	private currentTheme = ThemeEnum.LIGHT;

	constructor(rendererFactory: RendererFactory2, private cookie: CookieService) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	toggleTheme() {
		const newTheme = this.currentTheme == ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
		this.renderer.removeClass(document.body, this.currentTheme);
		this.renderer.addClass(document.body, newTheme);
		this.currentTheme = newTheme;

		this.cookie.set("theme", newTheme, 90);
	}

	initTheme() {
		let theme = this.cookie.get("theme") as ThemeEnum;
		console.log(theme);
		if (!this.isValidTheme(theme)) {
			theme = ThemeEnum.DARK;
		}

		this.renderer.addClass(document.body, theme);
		this.currentTheme = theme;

		// refresh cookie
		this.cookie.set("theme", theme, 90);
	}

	isValidTheme(theme: ThemeEnum) {
		return theme && (theme == ThemeEnum.LIGHT || theme == ThemeEnum.DARK);
	}
}
