function repeatCharacterNTimes(char) {
	return function(count) {
		for (let i = 0; i < count; i++) process.stdout.write(char);
		return this;
	};
}

module.exports = {
	repeatCharacterNTimes
};
