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

module.exports = defaultColorMap;
