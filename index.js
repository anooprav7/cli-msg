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
const colorMap = {
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

function printToConsole(type) {
	const badgeStyle = chalk.bgHex(colorMap[type].badge).hex(colorMap[type].contrastText).bold;
	const messageStyle = chalk.hex(colorMap[type].message);
	function info(...args) {
		if (args.length === 1) clog(badgeStyle(` ${type.toString().toUpperCase()} `) + messageStyle(` ${args[0]}`));
		else if (args.length > 1) clog(badgeStyle(` ${args[0]} `) + messageStyle(` ${args[1]}`));
	}
	info.m = function(message) {
		clog(messageStyle(`${message}`));
	};
	return info;
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
const info = printToConsole('info');
const warn = printToConsole('warn');
const log = printToConsole('log');
const error = printToConsole('error');
module.exports = { info, warn, log, error, indent };
