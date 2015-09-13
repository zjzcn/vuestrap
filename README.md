VueStrap
========
Extend Bootstrap 4 with extra "plug and play" components and simplify your web development.

The idea
--------
- cherry pick components, B4 is now modular
- components are descriptive
- component specific mixins belong to it's components:
	-- alerts
	-- buttons
	-- forms
	-- grid -> now in global/bootstrap_grid
	-- images
	-- labels
	-- list-group
	-- navbar-align in navbar (commented out)
	-- nav-dividers in dropdown
	-- pagination
	-- progress
	-- table row in tables

What is diffrent to B4
--------
- icons are svg's for better rendering on high resolution devices
- common stuff lands in core folder like icons, grid and normalize/reboot, utilities to avoid rendering for each component
- core stuff needs to be referenced separately in the app
- every component is compiled separately by Webpack
- themes can be overwritten in Webpack compilation process by app specific theme modifications
- theme is a bootstrap file for variables and mixins