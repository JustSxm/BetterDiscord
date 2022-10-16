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
		this.setupView();
	}

	setupView() {
		const searchBox = document.querySelector("div.toolbar-3_r2xA .search-39IXmY");
		const todoButton = this.htmlToElement(
			'<div class="iconWrapper-2awDjA clickable-ZD7xvu" role="button" tabindex="0" id="justsxmTodoButton"><svg x="0" y="0" class="icon-2xnN2Y" viewBox="0 0 576 512" role="img" width="24" height="24" fill="none"><path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" fill="currentColor"/></svg></div>'
		);
		todoButton.addEventListener("click", () => {
			const todoPopup = this.htmlToElement(
				'<div id="justsxmPopout" class="layerContainer-2v_Sit"><div id="justsxmpopup" class="theme-dark layer-2aCOJ3" style="position: absolute; top: 66px; right: 56px;"><div aria-label="Inbox" role="dialog" tabindex="-1" aria-modal="true"><div class="recentMentionsPopout-2bI1ZN messagesPopoutWrap-3zryHW" aria-label="Recent Mentions" style="max-height: 1012px;"><div class="header-145e10 header-1w9Q93"><div class="tabBar-1qdMr5 topPill-3DJJNV" role="tablist" aria-orientation="horizontal"><div class="tab-TRrPC8 active-1grPyy item-3XjbnG selected-g-kMVV themed-2-lozF" role="tab" aria-selected="true" aria-controls="1-tab" aria-disabled="false" tabindex="0">Mentions</div><div class="tab-TRrPC8 item-3XjbnG themed-2-lozF" role="tab" aria-selected="false" aria-disabled="false" tabindex="-1">Unreads</div></div><div class="controls-1rku3l"><div class="button-1_oXub secondary-2bzKEX size32-1NLMUP" aria-label="Filter" role="button" tabindex="0"><svg aria-hidden="true" role="img" width="16" height="16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z" fill="currentColor"></path></svg></div></div></div></div></div></div></div>'
			);
			if (document.querySelector("#justsxmPopout")) {
				document.querySelector("#justsxmPopout").remove();
			} else {
				const firstPopupContainer = document.querySelectorAll("div.layerContainer-2v_Sit")[1];
				firstPopupContainer.after(todoPopup);
			}
		});
		searchBox.after(todoButton);
	}

	removeView() {
		const todoButton = document.querySelector("#justsxmTodoButton");
		const todoPopup = document.querySelector("#justsxmPopout");
		todoButton.remove();
		todoPopup.remove();
	}

	stop() {
		// Called when the plugin is deactivated
		this.removeView();
	}

	htmlToElement(html) {
		var template = document.createElement("template");
		html = html.trim(); // Never return a text node of whitespace as the result
		template.innerHTML = html;
		return template.content.firstChild;
	}
};
