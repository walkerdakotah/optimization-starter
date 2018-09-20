# CRO Project Starter Package

__The Problem:__ We launch many conversion rate optimization (CRO) experiments across our portfolio of web properties. Unfortunately, the proces of setting up an initial development environment to start a new project can be painful given the structure of some of our older repos.

__The Solution:__ This package aims to alleviate some of our pain points by establishing a simple boilerplate within the facility theme, as well as some guidelines on how to connect it to the pre-existing Gulp build process with minimal configuration. The code we install into Optimizely will output the exact same, however the local development process should prove to be much more enjoyable.

## Install

From inside `[facility-repo]/html/wp-content/themes/[facility-theme]`:
```
	git clone https://github.com/American-Addiction-Centers/optimization-starter.git optimization
```

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

##Setup Checklist:

- [Gulp](#gulp)
- [Optimization Styles](#optimization-syles)
- [Optimization JavaScript](#optimization-javascript)

### Gulp

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

3. Include the new `optimization.js` file in the `jsCustomSRC` file array and `customJSWatchFiles` array:

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

### Optimization Styles

From inside `wp-content/themes/[facility]/style.scss`:

1. Import the newly created `_optimization.scss` file:

	```
	@import "./optimization/optimization";
	```

### Optimization JavaScript

From inside `wp-content/themes/[facility]/includes/footer-scripts.php`:

1. Include a script tag pointing to the newly created `optimization.js` file:

	```
	<script type="text/javascript" src="<?php bloginfo('stylesheet_directory');?>/optimization/optimization.js"></script>
	```

## Workflow

We conduct all of our experiments in Optimizely, which requires use to handle all component variation updates with jQuery and component styles with plain CSS.

- jQuery
- HTML
- style
- images

### jQuery Overview

Inside `optimization.js`, you will find a basic boilerplate to get things started. We use an IIFE to invoke jQuery in the browser window and define a collection of variables that determine which variation is outputted on the page.

- __$facility__ - The name of the facility theme as a case-senstive string.
- __$name__ - The name of the variation. This is purely for local development purposes, so consider a simple naming convention, as it will carry over into our stylesheet classes and potentially image file names.
- __$variationFile__ -  The name of the variation's HTML file.
- __$variationPath__ - The path to to the `/html` directory, relative to the project root.

The jQuery Ajax method requests the variation HTML file as data, which makes it available to be inserted into the DOM via any of jQuery's DOM manipulation methods. The complete guideline for making Ajax requests can be found [here](https://api.jquery.com/jQuery.ajax/).

The following example utilizes the .replaceWith() method, however the full list of manipulation methods can be found in the jQuery [docs](https://api.jquery.com/category/manipulation/).

```
(function ($) {
  var $facility = ''
  var $name = 'v1';
  var $variationFile = $name + '.html'
  var $variationPath = '/wp-content/themes/' + $facility + '/optimization/html/';
  var $variation = $variationPath + $variationFile;

  $('body').addClass($name);
  jQuery.ajax({
    url: $variation,
    dataType: 'html'
  }).done(function (variationHTML) {
    console.log('variation updated');
    $('.first-footer-section').replaceWith(variationHTML);
  })

})(jQuery);
```


### HTML Overview

The package boilerplate includes a blank `.html` file to get started quickly. By utilizing the jQuery Ajax method we are able to write the html for our variations in its standard format.

Create a new file, and begin writing your markup immediately. To make it available for use in the DOM, all you need to do is update the variable `var $name = '[file-name]'` in `optimization.js` accordingly (without the file extention).

This eliminates the repititive copy and pasting of HTML into `optimization.js`. It also helps keep our variation markup separate from one another.

### Style Overview


