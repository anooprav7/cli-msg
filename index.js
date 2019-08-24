const chalk = require('chalk');
const clog = console.log;

const defaultColorMapToMessageType = require('./defaultColorMap');
const { repeatCharacterNTimes } = require('./utils');

function MessageType(colorObject) {
	const mainColor = colorObject.main;
	const contrastColor = colorObject.contrast;

	const badgeColor = `bg${mainColor.charAt(0).toUpperCase()}${mainColor.substring(1)}`;

	function displayMessage(...args) {
		if (args.length === 1) {
			clog(chalk[mainColor](args[0]));
		} else if (args.length < 1) {
			throw new Error('No arguments found');
		} else {
			const badgeText = args[0];
			const messageText = args.slice(1).join('');
			clog(chalk[badgeColor][contrastColor]['bold'](` ${badgeText} `) + chalk[mainColor](` ${messageText} `));
		}
	}
	displayMessage.b = function(...args) {
		const badgeText = args.join('');
		clog(chalk[badgeColor][contrastColor](`${badgeText}`));
	};
	displayMessage.m = function(...args) {
		const messageText = args.join('');
		clog(chalk[mainColor](`${messageText}`));
	};
	return displayMessage;
}

const indent = {
	nl: repeatCharacterNTimes('\n'),
	tab: repeatCharacterNTimes('\t'),
	space: repeatCharacterNTimes(' ')
};

const allMessageTypes = Object.keys(defaultColorMapToMessageType).reduce((aggregator, messageType) => {
	aggregator[messageType] = MessageType(defaultColorMapToMessageType[messageType]);
	return aggregator;
}, {});

module.exports = {
	...allMessageTypes,
	indent
};
