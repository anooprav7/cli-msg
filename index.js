const chalk = require('chalk');
const clog = console.log;

// https://www.materialui.co/flatuicolors
const materialColorMap = {
	white: '#fff',
	black: '#000',
	// Logs
	peterriver: '#3498db',
	belizehole: '#2980b9',

	// Warning
	orange: '#f39c12',
	sunflower: '#f1c40f',

	// Info
	emerland: '#2ecc71',
	nephiritis: '#27ae60',

	// Error
	alizarin: '#e74c3c',
	pomegrante: '#c0392b'
};

const defaultColorMap = {
	error: {
		badge: materialColorMap.pomegrante,
		message: materialColorMap.alizarin,
		contrastText: materialColorMap.white
	},
	warn: {
		badge: materialColorMap.orange,
		message: materialColorMap.sunflower,
		contrastText: materialColorMap.white
	},
	log: {
		badge: materialColorMap.belizehole,
		message: materialColorMap.peterriver,
		contrastText: materialColorMap.white
	},
	info: {
		badge: materialColorMap.nephiritis,
		message: materialColorMap.emerland,
		contrastText: materialColorMap.white
	}
};

function initialiseAndReturnMessageTypeFunction(type, typeColorMap) {
	// add optional colorMap here
	const badgeColor = typeColorMap.badge ? typeColorMap.badge : typeColorMap.message;
	const contrastTextColor = typeColorMap.contrastText ? typeColorMap.contrastText : typeColorMap.message;
	const messageColor = typeColorMap.message;

	const badgeStyle = chalk.bgHex(badgeColor).hex(contrastTextColor).bold;
	const messageStyle = chalk.hex(messageColor);

	function messageTypeFunction(...args) {
		if (args.length === 1) clog(badgeStyle(` ${type.toString().toUpperCase()} `) + messageStyle(` ${args[0]}`));
		else if (args.length > 1) clog(badgeStyle(` ${args[0]} `) + messageStyle(` ${args[1]}`));
	}
	messageTypeFunction.m = function(message) {
		clog(messageStyle(`${message}`));
	};
	messageTypeFunction.b = function(message) {
		clog(badgeStyle(`${message}`));
	};
	return messageTypeFunction;
}

const indent = {
	nl: function(count) {
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
		Object.keys(mergedColorMap).map(type => {
			themed[type] = initialiseAndReturnMessageTypeFunction([type], colorMap[type]);
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
				console.log('cmap', type);
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
	indent,
	initialiseThemedCLI,
	isValidColorMap
};
