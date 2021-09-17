module.exports = {
	networks: {},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		useColors: false,
		reporter: 'mochawesome',
		reporterOptions: {
			reportFilename: '~/.test/result.json',
			saveJSON: true,
		},
	},

	// Configure your compilers
	compilers: {},
}
