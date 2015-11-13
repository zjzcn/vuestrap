Vuestrap
=========

Does your current web development rely on dozen of JQuery plug-ins that are overcomplicated, inconsistent in look and feel, and lack of proper browser support? Do you find many plug-ins difficult to implement, because every doc is different and hard to read? Do you end up overriding a lot of components, to then realise, that nothing works as expected?

Vuestrap was created to solve all these problems and simplify web development. We believe that building apps should be an easy process. Developers should be able to cherry-pick components with confidence and just focus on building application logic.

Vuestrap is a library of community web components built with Vue.js and Bootstrap 4.

Features
----------
- Cascading Inheritance - to keep all your components consistent and themable
- Greater control over your components via SCSS, so you can take advantage of Bootstrap 4 goodies like mixins, variables and utils
- All components are responsive thanks to `ems` and `rems` and are thigthly integrated with Bootstrap 4 grid
- Components are designed to be simple and do only one thing, so you can easily extend it if needed
- Just one dependency ([Vue.js v0.12.16](http://vuejs.org)) - no need for jQuery, bootstrap.js or bootstrap.css
- Small footprint - require only those componets that you need for your project
- SVG sprite support with 223 icons from Iconic — www.useiconic.com/open
- IE9 Browser support - so you can use it with confidence
- Built with community components in mind - all components are part of the same repo, all docs are consitent and every component is compatibile with new release of Vuestrap


DEMO
----------
http://vuestrap.com

Installation
------------

Install Vuestrap starter by running:

    git clone https://github.com/gritcode/vuestrap-starter.git
    npm install
    npm run dev  

Sample Usage
------------

```html
# Start watching for file changes and type in in your bash
    npm run dev

# Pick your component from the Library and copy the snippet into your Html template
    <form-input id="email" type="email" label="Example Label" model="{{@email}}"></form-input>

# Require component in your Vue app
    new Vue({
      ...
      components: {
        'form-input': require('form-input')
      }
    })
```

That's it. Vuestrap will recompile the component with your theme variables and it will output this:
```html
<fieldset class="form-group">
    <label for="email">Example Label</label>
    <input type="text" class="form-control" id="email">
</fieldset>
```          

Build & Share:
----------

1. Fork [Vuestrap](https://github.com/gritcode/vuestrap)
2. Create your component that should consist of scss, html and js files
3. Follow these simple guidelines, while developing
    *   use ES6 and JSCS Linter (see [Atom plugin](https://atom.io/packages/linter-jscs) for example)
    *   namespace folder name with your github username, i.e. "gritcode"
    *   namespace your component in the scss file, i.e. ".dropdown-gritcode"
    *   in your html file add root div with the component's class, i.e. `<div class="dropdown dropdown-gritcode">...</div>`
    *   if you provide variables for your components, than make sure it gets imported in [variables.scss](https://github.com/gritcode/vuestrap/tree/master/_variables.scss
    *   namespace your variables like so: `$gritcode-dropdown-width: 180px !default;`
4. Put your files in [extra](https://github.com/gritcode/vuestrap/tree/master/extra) directory
5. Create demo page in [demo](https://github.com/gritcode/vuestrap/tree/master/demo) directory
6. Test it on IE9/Android 4.3+
7. Create pull request, and if all good than your component will be released within days

Contribute
----------

- Issue Tracker: [http://github.com/gritcode/Vuestrap/issues](http://github.com/gritcode/Vuestrap/issues)
- Source Code: [http://github.com/gritcode/Vuestrap](http://github.com/gritcode/Vuestrap)


Support
-------

If you are having issues, please let us know.
We have an issue tracker on our [github page](https://github.com/gritcode/Vuestrap).

FAQ
-------
1. *How Vuestrap compares to other frameworks/UI component libraries?*

    - _Bootstrap (4-Alpha)_ - Vuestrap is more than just styles and markup. It extends Bootstrap with custom tags and extra components and allows you to only load selected elements, to keep yopur project's footprint smaller
    - _Polymer Project (1.0)_ - Vuestrap does not require Web Component polyfills and supports IE9 and 'Cross-scope' styling
    - _Semantic UI (v2.1.4)_ - Vustrap is very simple in use and much smaller in size < 200kb minified (JS,CSS and Vue.js dependency) as opposed to 762kb (exclusive of Vue.js)
    - _vue-strap (0.1.2)_ - both projects are based on the same idea, but Vuestrap gives you greater control over your components via SCSS and makes them coherent with your theme.

2. *How Vuestrap works?*

    Vuestrap for Html is like Babel for ES6. It uses Vuejs and Webpack to translate custom tags like `<form-input>` into plain Html.

3. *What is Vue.js?*

    Vue.js is a JavaScript framework, a bit like Angular JS but simpler to learn. Vue.js component system is similar to Web Components, without requiring any polyfills.
    You might find it useful to read [this guideline](http://vuejs.org/guide/index.html) while working with Vuestrap or building your custom components.

4. *What is Webpack?*

    It's an automation tool, a bit like Browserfy, Grunt or Gulp. It allows you to import components using `require('componentName')` method and plays nicely with Vue.js.
	It takes all your modules (html, js, and scss) and compiles them on the fly, outputting to bundle.js and css files.

	_Note_: you don't need to know how Webpack works to use Vuestrap. It is already configured for you.
	If you need to know more, Vue.js docs has a good article about Webpack and building larger apps at http://vuejs.org/guide/application.html

5. *What are Web Components?*

    Web Components allow to use custom Tags like `<form-input>` in your projects and are future of web development. However, Web Components are not yet widely supported by browsers and might require you to use polyfills. There is a good article about Web Components here https://css-tricks.com/modular-future-web-components/

    Vuestrap uses Vue.js to compile custom tags into standard html so there is no need for polyfills.


TODO
-------   
* Re-factor to ES6
* Re-factor to Vue.js v1.0 as soon as it is available
* Copy Bootstrap 4 dependencies as soon as v1.0 is available
* Add support for spinner component in IE9
* Add rest of the B4 components
* Animations
* Testing

License
-------

The project is licensed under the MIT license.
