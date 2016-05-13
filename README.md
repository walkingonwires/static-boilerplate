# Transmogrify Front-End Boilerplate

Get your project started quickly with this front-end boilerplate.  Includes framework for organizing and writing CSS (Using LESS and BEM), and a Gulp process for compiling everything and creating build-ready assets.

## How it Works

The styling for project is built using LESS and requires Gulp to be run to compile.

The main stylesheet is /src/style/style.less. Any new LESS files added to the project will have to be imported here.

After downloading the project, in the main folder, run:

    npm install

This will install all of the necessary modules to run the gulp processes.

Then run:

    gulp

This will do the initial build: create a css file out of compiled LESS files, and copy images/fonts/js from src to dist, then start watching the src folders for changes.

When you're interested in doing a build for the public run:

    gulp build

This runs the whole process over again, and runs all of the images through compression (so it may take a while).

## What's In It

     /src/style/base/
Variables, mixins, resets, fonts, global styles.

     /src/style/vendor/
Third party style libraries

     /src/style/elements/
These should be small elements that form the basis for the site/app.  each file will contain all states, e.g. buttons will have active, inactive, and different colors in the same file.

     /src/style/modules/
These are larger, more structural, pieces of the site that are made up of "elements"

     /src/style/pages/
Styling and overrides for elements and modules meant for individual pages.

	/src/icons/
This is where all SVG files that will be used in a custom icon font should be stored.

	/src/js/vendor/modernizr/
Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.  It adds classes to the body tag that helps to determine which CSS and HTML features are supported.

	/src/js/vendor/jquery/
Latest version of jQuery.

## JSHint

This boilerplate uses "gulp-jshint," a tool that helps to detect errors and potential problems in your JavaScript code.  Read more here: https://www.npmjs.com/package/gulp-jshint

By default, JSHint isn't doing anything.  It checks all JS files in src/js/.  If you'd like to run it, just run:

	gulp lint

This will show a report in Terminal.

## Icon Font Generator

This boilerplate uses "gulp-fontcustom" to generate a usable font out of icons placed in the src/icons/ folder. Read more here: https://www.npmjs.com/package/gulp-fontcustom

### Generating Icons

To get this tool set up correctly, you must first install two libraries.  In terminal, from anywhere, run these two commands:

    brew install fontforge eot-utils
    gem install fontcustom

This will install the necessary things to get the icon font generation working.

This generator exists outside of the rest of the gulp tools, so you can to run it only when necessary.  To generate the font once, run:

	gulp icons

To watch the src/icons/ folder for new icons and automatically update the font (while you're actively working on it), run:

	gulp watch-icons

## Styleguide Generator

This boilerplate uses a gulp generated styleguide powered by: http://styleguide.sc5.io/

The styleguide is created by comments left in the LESS files that we'll use for the site.  There are examples of what the comments should look like in each of the example LESS files.  To organize the content of the styleguide, mark each section with the appropriate section.

Here's an example of the type of comment to include in your LESS/CSS to make the styleguide pull it in:

    // Title of page
	//
	// Description of what is contained on this page of the styleguide
	//
	// Styleguide 1.0

    // Section Title (e.g. Headings)
	//
	// Description for section
	//
	// markup:
	// <example code here>
	//
	// Styleguide 1.1 (where this section occurs within the page. This organizes the flow of the page and also the subnav)

	selectors {
		styles here
	}

### Building the Styleguide

I've left the styleguide out of the main build process for now, because we may not always want to use it.  To build the styleguide:

	gulp styleguide

This builds and runs the styleguide on localhost:3000

You can also have gulp watch for changes in LESS/CSS files and regenerate automatically by running this:

	gulp watch-styleguide
