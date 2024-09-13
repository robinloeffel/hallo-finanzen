const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	extends: "sweet",
	rules: {
		"@stylistic/indent": [ "error", "tab" ]
	},
	overrides: [{
		files: "*.svelte",
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser"
		},
		extends: "plugin:svelte/recommended",
		rules: {
			"@stylistic/indent": "off",
			"@typescript-eslint/init-declarations": "off",
			"unicorn/no-null": "off",

			"svelte/block-lang": [ "error", {
				script: "ts",
				style: "scss"
			}],
			"svelte/html-closing-bracket-spacing": "error",
			"svelte/html-quotes": "error",
			"svelte/indent": [ "error", {
				indent: "tab"
			}],
			"svelte/infinite-reactive-loop": "error",
			"svelte/mustache-spacing": "error",
			"svelte/no-dom-manipulating": "error",
			"svelte/no-dupe-on-directives": "error",
			"svelte/no-dupe-use-directives": "error",
			"svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
			"svelte/no-extra-reactive-curlies": "error",
			"svelte/no-reactive-reassign": "error",
			"svelte/no-spaces-around-equal-signs-in-attribute": "error",
			"svelte/no-store-async": "error",
			"svelte/no-target-blank": "error",
			"svelte/prefer-class-directive": "error",
			"svelte/prefer-style-directive": "error",
			"svelte/require-store-callbacks-use-set-param": "error",
			"svelte/shorthand-attribute": "error",
			"svelte/shorthand-directive": "error",
			"svelte/valid-prop-names-in-kit-pages": "error"
		}
	}],
	ignorePatterns: [
		"*-generated.d.ts"
	]
});
