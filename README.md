# Front-End Boilerplate - Gulp, Browserify, SCSS, Handlbars, PageJS

## How it Works

After downloading the project, in the main folder, run:

    npm install

This will install all of the necessary modules to run the gulp processes.

Then run:

    gulp

This will do the initial build in development mode then launch the browser and watch for changes.

When you're interested in doing a build for the public run:

    gulp prod build

This runs the whole process over again with cache busting, uglify, etc.

## JSHint

This boilerplate uses "gulp-jshint," a tool that helps to detect errors and potential problems in your JavaScript code.  Read more here: https://www.npmjs.com/package/gulp-jshint

By default, JSHint isn't doing anything.  It checks all JS files in src/js/.  If you'd like to run it, just run:

	gulp lint

This will show a report in Terminal.
