module.exports = {
	bail: false,
	moduleFileExtensions: ['js', 'svelte'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester'
	},
	verbose: true
}
