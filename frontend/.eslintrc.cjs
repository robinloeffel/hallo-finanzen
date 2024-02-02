const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	extends: "sweet",
	overrides: [{
		files: "*.svelte",
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser"
		},
		extends: "plugin:svelte/recommended",
		rules: {
			"init-declarations": "off",
			"unicorn/no-null": "off"
		}
	}],
	ignorePatterns: [
		"*.generated.*"
	]
});
