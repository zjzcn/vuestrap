VueStrap
========
Extend Bootstrap 4 with extra "plug and play" components and simplify your web development.

The idea
--------
- cherry pick components from library
- cleaner code thanks to custom tags
- any component within application has consistent look and feel 
- easy to theme

Updated Boostrap structure in VueStrap:
--------
- icons, grid, normalize/reboot and utilities are in core folder, imported on the app level (to avoid css rendering during each component's compilation process)
- _variables.scss and _mixins.scss are now part of one file theme/bootstrap.scss
- core/ folder includes SVG icons 
- mixins are in the root folder to be easily imported in the theme/bootstrap.scss and/or application itself
- added extra folder for community components that meet VueStrap guidelines http://vuestrap.gitbooks.io/docs/content/guide.html
- components/ folder contains the same components from Bootstrap 4 with additional html tamplates and javascript files