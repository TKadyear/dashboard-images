module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},

	"settings": {
		"react": {
			"fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
			"version": "detect",
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended"
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
		"@emotion",
		"jest"
	],
	"rules": {
		"@emotion/jsx-import": "error",
		"@emotion/no-vanilla": "error",
		"@emotion/import-from-emotion": "error",
		"@emotion/styled-import": "error",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": 0,
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
