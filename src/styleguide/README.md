# Transmogrify Styleguide

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
