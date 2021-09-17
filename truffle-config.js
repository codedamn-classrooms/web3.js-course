module.exports = {
	networks: {},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		useColors: false,
		reporter: 'json',
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: '^0.8.0',
		},
	},
}
