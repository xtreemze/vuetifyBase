module.exports = api => {

	api.onCreateComplete(() => {
		const fs = require('fs')
		const content = `{
	"editor.minimap.renderCharacters": false,
	"editor.wordWrap": "on",
	"files.trimFinalNewlines": true,
	"editor.fontLigatures": true,
	"editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
	"gitlens.advanced.messages": {
		"suppressShowKeyBindingsNotice": true
	},
	"typescript.updateImportsOnFileMove.enabled": "always",
	"javascript.updateImportsOnFileMove.enabled": "always",
	"workbench.colorTheme": "Monokai-Cobalt",
	"workbench.statusBar.feedback.visible": false,
	"git.autofetch": true,
	"editor.quickSuggestions": {
		"strings": true,
	},
	"vetur.format.defaultFormatter.js": "vscode-typescript",
	"vetur.format.defaultFormatter.html": "js-beautify-html",
	"diffEditor.ignoreTrimWhitespace": false,
	"window.zoomLevel": 0,
	"gitlens.views.fileHistory.enabled": false,
	"gitlens.views.lineHistory.enabled": false,
	"editor.fontSize": 16,
	"gitlens.views.search.enabled": false,
	"gitlens.views.compare.enabled": false,
	"gitlens.mode.statusBar.enabled": true,
	"files.autoSave": "onFocusChange",
	"files.eol": "\n",
	"html.format.endWithNewline": true,
	"html.format.maxPreserveNewLines": 1,
	"files.trimTrailingWhitespace": true,
	"editor.trimAutoWhitespace": true,
	"eslint.autoFixOnSave": true,
	"eslint.enable": true,
	"eslint.run": "onType",
	"eslint.validate": [
		{
			"language": "vue",
			"autoFix": true
		},
		{
			"language": "html",
			"autoFix": true
		},
		{
			"language": "javascript",
			"autoFix": true
		},
		{
			"language": "javascriptreact",
			"autoFix": true
		},
	],
	"editor.tabSize": 4,
	"editor.insertSpaces": false,
	"vetur.format.scriptInitialIndent": true,
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true,
	"typescript.format.insertSpaceBeforeFunctionParenthesis": true,
	"editor.autoClosingBrackets": "never",
	"editor.autoClosingQuotes": "never"
}

`
		fs.mkdirSync('./.vscode')

		fs.writeFileSync("./.vscode/settings.json", content, "utf-8", err => {
			Error(err);
		});

		const content2 = `language: node_js
node_js:
  - "10"
cache:
  directories:
    - "node_modules"
script: yarn build
addons:
  apt:
    update: false
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: dist
  target-branch: gh-pages
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  on:
	branch: master

`


		fs.writeFileSync("./.travis.yml", content2, "utf-8", err => {
			Error(err);
		});

const content3 = `{
	// See http://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
	// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
	// List of extensions which should be recommended for users of this workspace.
	"recommendations": [
		"octref.vetur",
		"dbaeumer.vscode-eslint",
		"xabikos.javascriptsnippets",
		"gerane.theme-monokai-cobalt",
		"eg2.vscode-npm-script",
		"christian-kohler.path-intellisense",
		"octref.vetur",
		"dariofuzinato.vue-peek",
		"sdras.vue-vscode-snippets",
		"coder911th.vuetify-camelcase-snippets",
		"coenraads.bracket-pair-colorizer",
		"steoates.autoimport"
	],
	// List of extensions recommended by VS Code that should not be recommended for users of this workspace.
	"unwantedRecommendations": []
}

`


fs.writeFileSync("./.vscode/extensions.json", content3, "utf-8", err => {
	Error(err);
});


	})

}
