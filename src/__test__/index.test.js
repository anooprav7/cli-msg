const { success, info, error, warn, log } = require('../index');

// TODO Integrate Circle CI into this repo

describe('Export has all the default functions', () => {
	test('Default imports check', () => {
		expect(success).toEqual(expect.anything());
		expect(info).toEqual(expect.anything());
		expect(error).toEqual(expect.anything());
		expect(warn).toEqual(expect.anything());
		expect(log).toEqual(expect.anything());
	});
});
