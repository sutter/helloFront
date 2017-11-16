# Hello Front

Boilerplate SCSS / PUG / ES6 for clean and fast Front-end project.

Work on **app/** folder and gulp build in **dist/**.

## Installation

### Node version manager

Install [NVM](https://github.com/creationix/nvm)

Use the version 8.9.0 of NodeJS.

```bash
nvm use
```

### Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Yarn

Go to [https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

### Install Gulp

Go to [https://gulpjs.com/](https://gulpjs.com/)

### Download the dependencies NPM

```bash
yarn install
```

### Install Tooling

Use [Prettier](https://github.com/prettier/prettier) for clean your **JS** / **SCSS** files.

Plugin for IDE :

* [Visual Code Studio](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Atom](https://atom.io/packages/prettier-atom)
* [Sublime text](https://github.com/danreeves/sublime-prettier)

## Commands

### Run project

```bash
yarn start
```

### Build project

```bash
yarn build
```

### Clean project

```bash
yarn clean
```

## How it works

### Works with SCSS

The SCSS files are located in `./app/assets/scss`.

Example SCSS hierarchy :

* **base/** : Unclassed HTML elements (type selector)
* **components/** : Designed components, chunks of UI
* **tools/** : Default mixin and functions
* **utils/** : Helpers and overrides
* **_settings.scss** : Global variables
* **app.scss** : Main stylesheet

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

Disabled by default, for activate do :

* in `./gulp/config.js` at **line 65** update value : `enable: true`;
* uncomment **lines 12 & 13** of file `./app/template/layout/base.jade`;
* add svg files in folder `./app/assets/img/sprite`.

Use like this :

```pug
svg
  use(xlink:href="#twitter")
```

### Works with icons font

Disabled by default, for activate do :

* in `./gulp/config.js` at **line 65** update value : `enable: true`;
* Add [this file](https://gist.github.com/sutter/5f9471f95f6d5f388704721272b4a21e) in `./app/assets/scss/tools/`;
* Add SVG Files in folder `./app/assets/icons` and gulp made magic.

[Preparing-svgs](https://www.npmjs.com/package/gulp-iconfont#preparing-svgs)

* Icon format: svg
* Icon size: 512x512
* Vectorize stroke

## TODO

* add version on CSS and JS main files
* add styleguide generator