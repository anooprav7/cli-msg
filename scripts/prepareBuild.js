const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

const { success, info } = require(path.resolve('./src/index.js'));

const BUILD_OUTPUT_FOLDER = './build';

info('BUILD', 'build process started');

rimraf.sync(BUILD_OUTPUT_FOLDER);
fs.mkdirSync(BUILD_OUTPUT_FOLDER);

success('build folder created');

const filesToCopy = [
	{ name: 'index.js', path: path.resolve('./src/index.js') },
	{ name: 'utils.js', path: path.resolve('./src/utils.js') },
	{ name: 'defaultColorMap.js', path: path.resolve('./src/defaultColorMap.js') },
	{ name: 'package.json', path: path.resolve('./package.json') },
	{ name: 'README.md', path: path.resolve('./README.md') }
];

let copyCount = 0;

filesToCopy.forEach((file, index) => {
	fs.copyFile(file.path, BUILD_OUTPUT_FOLDER + '/' + file.name, err => {
		if (err) throw err;
		copyCount++;
		success(`${file.name} copied`);
		if (copyCount === filesToCopy.length) success.wb(`build completed`);
	});
});
