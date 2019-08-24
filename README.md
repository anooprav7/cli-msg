# cli-msg

> Colored CLI messages for better log messages

## Install

```
yarn add cli-msg

npm install cli-msg --save
```

## Naming conventions used

#### Badge

![Badge Image](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/badge.png)

-   Badge text refers to the text with primary color applied to the background.

#### Message

![Message Image](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/m.png)

-   Message text refers to the colored text with the transparent background.

## Usage

### Message type usage

```js
const { success } = require('cli-msg');

// only 1 argument
success( <message-text> )
```

![One Argument](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/one_argument.png)

```js
// 2 or more arguments
// 1st argument is shown in badge text and remaining args shown as one message
success( <badge-text>, <message-text>[..] )
```

![Many Arguments](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/many_arguments.png)

```js
// Specific message styles
// b - badge style type
// Only badge style text, no message text
success.b( <only-badge-style-text> )
```

![b Function](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/b.png)

```js
// m - message style type
// Only message style text, no badge text
success.m( <only-message-style-text> )
```

![m Function](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/m.png)

```js
// wb - with default badge - Eg. info will have 'INFO' as the badge text
// message with badge text 'SUCCESS'
success.wb( <only-message-style-text> )
```

![wb Function](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/wb.png)

#### Same applies to success, warn, log, error, info message types.

### indent

This function is used to position the cursor according to your choice using

1. nl - newline (/n)
2. tab - tab (/t)
3. space - space (' ')

The inner functions are cascaded.

##### Sample usage

```js
const { indent } = require('cli-msg');

warn.b('Lorem ipsum dolor sit amet');
indent
	.nl(2) // New Line
	.tab(3) // Tab Space
	.space(5); // Space
error.b('Lorem ipsum dolor sit amet');
```

![Indent Function](https://cdn.jsdelivr.net/gh/anooprav7/cli-msg@master/docs/images/indent.png)

## [License](LICENSE)

MIT
