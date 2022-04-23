module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},

	"settings": {
		"react": {
			"createClass": "createReactClass", // Regex for Component Factory to use,
			"pragma": "React",  // Pragma to use, default to "React"
			"fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
			"version": "detect",
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@emotion"
	],
	"rules": {
		"@emotion/jsx-import": "error",
		"@emotion/no-vanilla": "error",
		"@emotion/import-from-emotion": "error",
		"@emotion/styled-import": "error",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
