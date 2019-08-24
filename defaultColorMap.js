// https://github.com/chalk/chalk#256-and-truecolor-color-support

const colors = {
	black: 'black',
	red: 'red',
	green: 'green',
	yellow: 'yellow',
	blue: 'blue',
	magenta: 'magenta',
	cyan: 'cyan',
	white: 'white'
};

const defaultColorMapToMessageType = {
	success: {
		main: colors.green,
		contrast: colors.black
	},
	error: {
		main: colors.red,
		contrast: colors.white
	},
	warn: {
		main: colors.yellow,
		contrast: colors.black
	},
	info: {
		main: colors.blue,
		contrast: colors.white
	},
	log: {
		main: colors.white,
		contrast: colors.black
	}
};

module.exports = defaultColorMapToMessageType;
