/**
 * @name Todo
 * @author JustSxm
 * @description A Todo plugin for BetterDiscord
 * @version 0.0.1
 * @authorId 370962656447954944
 * @authorLink https://twitter.com/Samductive_
 * @website https://github.com/JustSxm/BetterDiscord
 * @source https://github.com/JustSxm/BetterDiscord
 */
module.exports = class Todo {
	start() {
		// Called when the plugin is activated (including after reloads)
		const searchBox = document.querySelector("div.toolbar-3_r2xA .search-39IXmY");
		const todoButton = this.htmlToElement(
			'<div class="iconWrapper-2awDjA clickable-ZD7xvu" role="button" tabindex="0" id="justsxmTodoButton"><svg x="0" y="0" class="icon-2xnN2Y" viewBox="0 0 576 512" role="img" width="24" height="24" fill="none"><path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" fill="currentColor"/></svg></div>'
		);
		searchBox.after(todoButton);
	}

	stop() {
		// Called when the plugin is deactivated
		const todoButton = document.querySelector("#justsxmTodoButton");
		todoButton.remove();
	}

	htmlToElement(html) {
		var template = document.createElement("template");
		html = html.trim(); // Never return a text node of whitespace as the result
		template.innerHTML = html;
		return template.content.firstChild;
	}
};
