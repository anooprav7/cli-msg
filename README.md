### Install

```
yarn add themed-cli
```

### Usage

```js
const {info, warn, log, error} = require('themed-cli)
```

Each of the above functions have 3 modes of operation. I will be explaining using info function.

1. Custom badge text and message
   info('INFORMATION', 'Lorem ipsum dolor sit amet');
2. Default badge text and message
   info('Lorem ipsum dolor sit amet)
3. Only message text
   info('Lorem ipsum dolor sit amet)

```js
const {indent} = require('themed-cli);
```

This function is used to position the cursor according to your choice using

1. nl - newline (/n)
2. tab - tab (/t)
3. space - space (' ')

The inner functions are cascaded.
Sample usage

```js
indent
	.nl(4)
	.tab(2)
	.space(5);
```

### TODO

-   Add table cli like create-react-app
-   Divider - dotted, dashed

### License

MIT © [anooprav7](https://github.com/anooprav7)
