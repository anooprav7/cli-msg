const rimraf = require('rimraf');
const fs = require('fs');

const BUILD_OUTPUT_FOLDER = './build';

rimraf.sync(BUILD_OUTPUT_FOLDER);
fs.mkdirSync(BUILD_OUTPUT_FOLDER);

const filesToCopy = ['package.json', 'README.md'];

filesToCopy.forEach(file => {
	fs.copyFile(file, BUILD_OUTPUT_FOLDER + '/' + file, err => {
		if (err) throw err;
		console.log(`${file} copied`);
	});
});
