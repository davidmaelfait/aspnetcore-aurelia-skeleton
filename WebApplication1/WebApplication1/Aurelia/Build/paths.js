var aurelia_source = 'Aurelia/Source/';
var aurelia_destination = 'wwwroot/Aurelia/';

module.exports = {
	root: aurelia_source,
	output: aurelia_destination,
	ts: aurelia_source + '**/*.ts',
	html: aurelia_source + '**/*.html',
	js: aurelia_source + '**/*.js',
	ts_source: [
		'Aurelia/Typings/**/*.d.ts',
		'wwwroot/jspm_packages/**/*.d.ts'
	]
}