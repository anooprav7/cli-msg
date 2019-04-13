const chalk = require('chalk');
const log = console.log;

// https://www.materialui.co/flatuicolors
const materialColorMap = {
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
	error: materialColorMap.alizarin,
	warning: materialColorMap.orange,
	log: materialColorMap.peterriver,
	info: materialColorMap.emerland
};
function printToConsole(type, label, message) {
	log(chalk.bgHex(colorMap.log).hex('#FFFFFF')(`${label}`), chalk.hex(colorMap.log)`${message}`);
}
const spacing = {
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

module.exports = { printToConsole, spacing };
