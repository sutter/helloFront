# Starter STATIC components

Simple starter GULP / SCSS / JADE  / BABEL / BROWSERIFY for clean and fast Front-end project.

Work on **app/** folder and gulp build in **dist/**.

## Installation

### Node version manager

Install [NVM](https://github.com/creationix/nvm)

Use the version 5.0 of NodeJS.

```
nvm use
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Gulp
We begin by installing Gulp in global mode with `-g`.

```
npm install -g gulp
```

To check if everything is installed and Gulp is active:

```
gulp -v
```

### Download the dependencies NPM

```
npm install
```

## Gulp Tasks

### Run project

```
gulp
```

### Clean project

```
gulp clean
```

### Optimize for production

* Minify HTML
* Uglify Script
* Optimise and minify styles with CSSO

Run project before.

```
gulp production
```

### Deploy on GithubPages

Run project before.

```
gulp gh-pages
```

## How the starter works

### Works with SCSS

The SCSS files are located in `./app/assets/scss`

This starter use **normalize.css** with **NPM**.

* **base/** : Unclassed HTML elements (type selector)
* **components/** : Designed components, chunks of UI
* **tools/** : Default mixin and functions
* **utils/** : Helpers and overrides
* **_settings.scss** : Global variables
* **main.scss** : Main stylesheet

#### CSS naming convention

```
// Component
.myComponent { … }

// Component child
.myComponent-element { … }

// Component modifier
.myComponent--modifier {
	.myComponent-element { … }
	.myComponent-otherElement { … }
}

// Component state
.myComponent.is-state { … }

// JS for component
.js-myComponent { … }

```

### Works with jade templating

The Jade files are located in `./app/template`

* **layout** : layout of html files generated
* **mixin** : for reusable pattern
* **pages** : the content of html files generated
* **partial** : includes of html pattern
* **config.jade** : global variables

### Works with JavaSript

The Javascript files are located in `./app/assets/js`.

**Use the ES6 syntaxe** Babel convert it in ES5 for you. You can use Browserify, for split your codebase into partials and require them.

### Working with Images

The Image files are located in `./app/assets/img`

Accepted file formats : - jpg - png - gif - svg

### Working with Fonts

The font files are located in `./app/assets/font`

### Works with sprite SVG inline

Add svg files in folder `./app/assets/img/sprite` and uncomment lines *17 & 18* of file `./app/template/layout/base.jade`

### Works with icons font

ADD SVG Files in folder `./app/assets/icons` and gulp made magic.

* Icon format: svg
* Icon size: 512x512
* Vectorize stroke
