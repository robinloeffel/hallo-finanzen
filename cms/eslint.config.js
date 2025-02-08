import sweet from "eslint-config-sweet";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...sweet,
	{
		rules: {
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/no-tabs": "off"
		}
	}
];
