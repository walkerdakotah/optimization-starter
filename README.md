# CRO Project Starter Package

__The Problem:__ We launch many conversion rate optimization (CRO) experiments across our portfolio of web properties. Unfortunately, the proces of setting up an initial development environment to start a new project can be painful given the structure of some of our older repos.

__The Solution:__ This package aims to alleviate some of our pain points by establishing a simple boilerplate within the facility theme, as well as some guidelines on how to connect it to the pre-existing Gulp build process with minimal configuration.

##Project Structure

```
	/optimization
		/html
			- var-1.html
			- var-2.html
			- ...
		/images
			- v1-img.jpg
			- v2-img.jpg
			- ...
		_optimization.scss
		optimization.js
```

###Gulp File Checklist:

From inside `wp-content/themes/[facility]/gulpfile.js`:

1. Confirm the project URL matches your localhost name:

	```
	var projectURL = '[localhost name]'	(e.g.) 'gh.test'
	```

2. Include the newly created `_optimization.scss` file in the `styleWatchFiles` file array:

	```
	var styleWatchFiles = [
		'../AAC-Facilities-Parent/components/sass/**/*.scss',
		'./_rf_custom.scss',
		'./style.scss',
		'./optimization/*.scss',
	];
	```

3. Import the newly created `_optimization.scss` file in the `style.scss` file found in the facility theme root `[facility]/style.scss (e.g.) Greenhouse/style.scss`

	```
	@import "./optimization/optimization";
	```

4. Include the new `optimization.js` file in the `jsCustomSRC` file array and `customJSWatchFiles` array:

	```
	var jsCustomSRC = [
		'../AAC-Facilities-Parent/components/scripts/*.js',
		'../AAC-Facilities-Parent/components/bower_components/foundation-sites/dist/foundation.js',
		'./optimization/*.js',
	];
	```

	```
	var customJSWatchFiles = [
		'../AAC-Facilities-Parent/components/scripts/*.js',
		'./optimization/*.js',
	];
	```