module.exports = {
	networks: {},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		useColors: false,
		reporter: 'mochawesome',
		reporterOptions: {
			reportFilename: process.env.UNIT_TEST_OUTPUT_FILE,
			saveJSON: true,
		},
	},

	// Configure your compilers
	compilers: {},
}
