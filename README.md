# themed-cli

![Home](/images/home.png)

## Install

```
yarn add themed-cli

npm install themed-cli --save
```

## Naming conventions used

#### Badge

![Badge Image](/images/badge.png)

-   Badge text refers to the text with primary color applied to the background.

#### Message

![Message Image](/images/badge.png)

-   Message text refers to the colored text with the transparent background.

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
const { message, info, warn, log, error, indent } = require('themed-cli');

success('Lorem ipsum dolor sit amet');
success('Lorem', 'Lorem ipsum dolor sit amet');
success.m('Lorem ipsum dolor sit amet');
success.b('Lorem ipsum dolor sit amet');
success.wb('Lorem ipsum dolor sit amet');
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

warn.b('Lorem ipsum dolor sit amet');
indent
	.nl(2) // New Line
	.tab(3) // Tab Space
	.space(5); // Space
error.b('Lorem ipsum dolor sit amet');
```

![Indent image](/images/indent.png)

##### Sample usage

## TODO

-   Add table cli like create-react-app
-   Divider - dotted, dashed

## [License](LICENSE)

MIT
