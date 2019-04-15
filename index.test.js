const { info, error, warn, log, isValidColorMap, initialiseThemedCLI } = require('./index');

describe('Export has all the default functions', () => {
	test('Default imports check', () => {
		expect(info).toEqual(expect.anything());
		expect(error).toEqual(expect.anything());
		expect(warn).toEqual(expect.anything());
		expect(log).toEqual(expect.anything());
		expect(isValidColorMap).toEqual(expect.anything());
		expect(initialiseThemedCLI).toEqual(expect.anything());
	});
});

describe('ColorMap Validation', () => {
	test('Datatype - Array', () => {
		expect(isValidColorMap([1, 2, 3])).toBe(false);
	});
	test('Datatype - String', () => {
		expect(isValidColorMap('#fff')).toBe(false);
	});
	test('Mandatory message key missing check', () => {
		expect(
			isValidColorMap({
				tired: {
					badge: '#fff'
				}
			})
		).toBe(false);
	});
});
describe('Type addition and its presence', () => {
	test('Add caution type', () => {
		const colorMap = {
			caution: { message: '#efefef' }
		};
		const newThemeCLI = initialiseThemedCLI(colorMap);
		expect(newThemeCLI.caution).toEqual(expect.anything());
	});
});
