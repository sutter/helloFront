# Hello Front

Simple starter SCSS / PUG / ES6 for clean and fast Front-end project.

Work on **app/** folder and gulp build in **dist/**.

## Installation

### Node version manager

Install [NVM](https://github.com/creationix/nvm)

Use the version 8.5.0 of NodeJS.

```
nvm use
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Yarn

Go to [https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

### Install Gulp

Go to [https://gulpjs.com/](https://gulpjs.com/)

### Install Gem

```
bundle install
```

### Download the dependencies NPM

```
yarn install
```

### Install Tooling

Use [Prettier](https://github.com/prettier/prettier) for clean your **JS** / **SCSS** files.

Plugin for IDE :
* [Visual Code Studio](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Atom](https://atom.io/packages/prettier-atom)
* [Sublime text](https://github.com/danreeves/sublime-prettier)

## Gulp Tasks

### Run project

```
yarn start
```

### Build project

```
yarn build
```

### Clean project

```
yarn clean
```

### Optimize for production

* Minify HTML
* Optimise images
* Optimise and minify scripts with webpack
* Optimise and minify styles with CSSO

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

### Works with Pug templating

The PUG files are located in `./app/template`

* **layout** : layout of html files generated
* **mixin** : for reusable pattern
* **pages** : the content of html files generated
* **partial** : includes of html pattern
* **config.pug** : global variables

### Works with JavaScript

The Javascript files are located in `./app/assets/js`.

**Use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.

### Working with Images

The Image files are located in `./app/assets/img`

Accepted file formats : - jpg - png - gif - svg

### Working with Fonts

The font files are located in `./app/assets/font`

### Works with sprite SVG inline

Add svg files in folder `./app/assets/img/sprite` and uncomment lines *17 & 18* of file `./app/template/layout/base.jade`

### Works with icons font

ADD SVG Files in folder `./app/assets/icons` and gulp made magic.

[Preparing-svgs](https://www.npmjs.com/package/gulp-iconfont#preparing-svgs)

* Icon format: svg
* Icon size: 512x512
* Vectorize stroke
