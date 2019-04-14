# themed-cli
![Home](/images/home.png)

## Install

```
yarn add themed-cli

npm install themed-cli --save
```
## Naming conventions used
![Home](/images/badge.png)

- Badge text refers to the text with a colored background
- Message text refers to the text with the transparent background and to the right of the Badge text.

## Usage

### Message type usage
```js
const { info } = require('themed-cli');

info( <badge-text>, <message-text> ) // 
info( <message-text> )               // 'INFO' is set as <badge-text>
info.b( <only-badge-style-text> )    // Only badge style text, no message text
info.m( <only-message-style-text> )  // Only message style text, no badge text

Same applies to warn, log, error or any custom defined types.

```
##### Sample usage

```js
const { info, warn, log, error, indent } = require('themed-cli');

info('Lorem ipsum dolor sit amet');
info('Lorem', 'Lorem ipsum dolor sit amet');
info.m('Lorem ipsum dolor sit amet');
info.b('Lorem ipsum dolor sit amet');
```
```js
const { info, warn, log, error } = require('themed-cli');
```

### indent

This function is used to position the cursor according to your choice using

1. nl - newline (/n)
2. tab - tab (/t)
3. space - space (' ')

The inner functions are cascaded.
```js
const { indent } = require('themed-cli');

indent
	.nl(4)     // New Line
	.tab(2)    // Tab Space
	.space(5); // Space 
```

### Custom message types with color Maps

```js
const { initialiseThemedCLI } = require('themed-cli');

const colorMap = {
	error: {
		badge: '#c0392b',
		message: '#e74c3c',
		contrastText: '#fff'
	},
	warn: {
		badge: '#f39c12',
		message: '#f1c40f',
		contrastText: '#fff'
	},
	log: {
		badge: '#2980b9',
		message: '#3498db',
		contrastText: '#fff'
	},
	info: {
		badge: '#27ae60',
		message: '#2ecc71',
		contrastText: '#fff'
	}
};

const { info, warn, log, error, indent } = initialiseThemedCLI(customColorMap)
```
- Only mandatory field for each type is 'message'

## Images needed
-	badge and message
-	default look and feel
-	positioning on cli
- 	Custom look and feel


## TODO

-   Add table cli like create-react-app
-   Divider - dotted, dashed
-   only badge text like cra header while showing warnings - info.b

## [License](LICENSE)

MIT
