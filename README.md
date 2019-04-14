# themed-cli

## Install

```
yarn add themed-cli

npm install themed-cli --save
```

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

### Custom message types

```js
const { initialiseThemedCLI } = require('themed-cli');
```


Default contrastTextColor is black

Each of the above functions have 3 modes of operation. I will be explaining using info function.

1. Custom badge text and message

```js
info('INFORMATION', 'Lorem ipsum dolor sit amet');
```

2. Default badge text and message

```js
info('Lorem ipsum dolor sit amet');
```

3. Only message text

```js
info('Lorem ipsum dolor sit amet');
```

```js
const { indent } = require('themed-cli');
```



Sample usage

```js

```
## Images needed
-	badge and message
-	default look and feel
-	positioning on cli
- 	Custom look and feel


## TODO

-   Add table cli like create-react-app
-   Divider - dotted, dashed
-   only badge text like cra header while showing warnings - info.b

## License

MIT
