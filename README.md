# 1. Hello Front

[![Maintainability](https://api.codeclimate.com/v1/badges/5f42eea3983e36565d92/maintainability)](https://codeclimate.com/github/sutter/helloFront/maintainability)

Boilerplate SCSS / PUG / ES6 for clean and fast Front-end project.

Work on **src/** folder and gulp build in **dist/**.

<!-- TOC -->

- [1. Hello Front](#1-hello-front)
  - [1.1. Installation](#11-installation)
    - [1.1.1. Node version manager](#111-node-version-manager)
    - [1.1.2. Install Sass](#112-install-sass)
    - [1.1.3. Install Yarn](#113-install-yarn)
    - [1.1.4. Install Gulp](#114-install-gulp)
    - [1.1.5. Download the dependencies NPM](#115-download-the-dependencies-npm)
    - [1.1.6. Install Tooling](#116-install-tooling)
  - [1.2. Commands](#12-commands)
    - [1.2.1. Run project](#121-run-project)
    - [1.2.2. Build project](#122-build-project)
    - [1.2.3. Optimize SVG](#123-optimize-svg)
    - [1.2.4. Clean project](#124-clean-project)
  - [1.3. How it works](#13-how-it-works)
    - [1.3.1. Works with SCSS](#131-works-with-scss)
    - [1.3.2. Works with Pug templating](#132-works-with-pug-templating)
    - [1.3.3. Works with JavaScript](#133-works-with-javascript)
    - [1.3.4. Working with Images](#134-working-with-images)
    - [1.3.5. Working with Fonts](#135-working-with-fonts)
    - [1.3.6. Working width SVG Sprite](#136-working-width-svg-sprite)

<!-- /TOC -->

## 1.1. Installation

### 1.1.1. Node version manager

Install [NVM](https://github.com/creationix/nvm)

```bash
nvm use
```

### 1.1.2. Install Sass

Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in
command line.

### 1.1.3. Install Yarn

Go to
[https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

### 1.1.4. Install Gulp

Go to [https://gulpjs.com/](https://gulpjs.com/)

### 1.1.5. Download the dependencies NPM

```bash
yarn install
```

### 1.1.6. Install Tooling

Use [Prettier](https://github.com/prettier/prettier) for clean your **JS** /
**SCSS** files.

Plugin for IDE :

- [Visual Code Studio](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/packages/prettier-atom)
- [Sublime text](https://github.com/danreeves/sublime-prettier)

## 1.2. Commands

### 1.2.1. Run project

```bash
yarn dev
```

### 1.2.2. Build project

```bash
yarn build
```

### 1.2.3. Optimize SVG

```bash
yarn svg
```

### 1.2.4. Clean project

```bash
yarn reset
```

## 1.3. How it works

### 1.3.1. Works with SCSS

Use [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) design for orgaznise components

The SCSS files are located in `./src/assets/scss`.

Example SCSS hierarchy :

- **base/** : Unclassed HTML elements (type selector)
- **atoms/** : Atoms are the basic building blocks of matter (button, input, etc.)
- **molecules/** : Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound (from, cards, etc.)
- **layout/** : Layout are the basic elment for build layout.
- **page/** : Pages are specific instances of templates
- **tools/** : Default mixin and functions
- **utils/** : Helpers and overrides
- **\_settings.scss** : Global variables
- **app.scss** : Main stylesheet

Use the [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) namming convention.

### 1.3.2. Works with Pug templating

The PUG files are located in `./src/template`

- **layout** : layout of html files generated
- **mixin** : for reusable pattern
- **pages** : the content of html files generated
- **partial** : includes of html pattern
- **config.pug** : global variables

### 1.3.3. Works with JavaScript

The Javascript files are located in `./src/assets/js`.

**Use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.

### 1.3.4. Working with Images

The Image files are located in `./src/assets/img`

Accepted file formats : - jpg - png - gif - svg

### 1.3.5. Working with Fonts

The font files are located in `./src/assets/font`

### 1.3.6. Working width SVG Sprite

The svg files for sprite are located in `./src/assets/icons`.

Uncomment the line 11 of the file `./src/template/layout/base.pug` to include them in the basic layout.

A PUG mixin is planned for use:

```pug
  +icon('name-of-file', 'my-css-class')
```
