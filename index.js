const chalk = require('chalk');
const clog = console.log;

const defaultColorMap = require('./defaultColorMap');

function initialiseAndReturnMessageTypeFunction(type, typeColorMap) {
	const badgeColor = typeColorMap.badge ? typeColorMap.badge : typeColorMap.message;
	const contrastTextColor = typeColorMap.contrastText ? typeColorMap.contrastText : '#000';
	const messageColor = typeColorMap.message;

	const badgeStyle = chalk.bgHex(badgeColor).hex(contrastTextColor).bold;
	const messageStyle = chalk.hex(messageColor);

	function messageTypeFunction(...args) {
		if (args.length === 1) clog(badgeStyle(` ${type.toString().toUpperCase()} `) + messageStyle(` ${args[0]}`));
		else if (args.length > 1)
			clog(badgeStyle(` ${args[0].toString().toUpperCase()} `) + messageStyle(` ${args[1]}`));
	}
	messageTypeFunction.m = function(message) {
		clog(messageStyle(`${message}`));
	};
	messageTypeFunction.b = function(message) {
		const info = initialiseAndReturnMessageTypeFunction('info', defaultColorMap['info']);
		if (!typeColorMap.badge) info(`'badge' color key missing in '${type}' type. Using message color instead`);
		clog(badgeStyle(`${message}`));
	};
	return messageTypeFunction;
}

const indent = {
	nl: function(count) {
		// New line
		for (let i = 0; i < count; i++) process.stdout.write('\n');
		return this;
	},
	tab: function(count) {
		for (let i = 0; i < count; i++) process.stdout.write('\t');
		return this;
	},
	space: function(count) {
		for (let i = 0; i < count; i++) process.stdout.write(' ');
		return this;
	}
};

function initialiseThemedCLI(colorMap = {}) {
	const mergedColorMap = Object.assign({}, defaultColorMap, colorMap);
	if (isValidColorMap(colorMap)) {
		let themed = {};
		themed.indent = indent;
		Object.keys(mergedColorMap).map(type => {
			themed[type] = initialiseAndReturnMessageTypeFunction([type], mergedColorMap[type]);
		});
		return themed;
	}
}
/** */
function isValidColorMap(colorMap) {
	const error = initialiseAndReturnMessageTypeFunction('error', defaultColorMap['error']);
	if (typeof colorMap === 'object' && colorMap !== null && !Array.isArray(colorMap)) {
		// check if each key has message color at least and contrast text color- white
		let isValid = true;
		Object.keys(colorMap).every(type => {
			if (!colorMap[type].message) {
				//console.log('cmap', type);
				isValid = false;
				error(`Mandatory 'message' color key missing in '${type}' type`);
				return false;
			}
		});
		return isValid;
	} else {
		error('ColorMap should be a valid object');
		return false;
	}
}

module.exports = {
	...initialiseThemedCLI(defaultColorMap),
	initialiseThemedCLI,
	isValidColorMap
};

/*
Usage

    info
    log 
    error
    warn
    indent
colorMap
    sample
    schema
        badge - badge and contrast color
        message
        mandatory fields

*/
