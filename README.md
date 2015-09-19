# helloFront

Simple starter GULP / SCSS Pattern / JADE for clean Front-end project.

Work on **app/** folder and gulp build in **dist/**.

## Installation

### Install NodeJs
Go to [NodeJS.org](http://NodeJS.org) for installation.

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

## Gulp Task

### Run project

```
gulp
```

### Clean project

```
gulp clean
```

### Build & Optimize

* Minify HTML
* Uglify Script
* Strip console, alert, and debugger statements from JavaScript code
* Optimise styles (csso) and regroup media queries

```
gulp --production
```

### Deploy on GithubPages

```
gulp deploy
```

## SCSS Structure

This starter use *Normalize.css* with *NPM*.

* **base/** : Unclassed HTML elements (type selector)
* **components/** : Designed components, chunks of UI
* **tools/** : Default mixin and functions
* **utils/** : Helpers and overrides
* **_settings.scss** : Global variables
* **index.scss** : Main stylesheet

## CSS naming convention

```
// Component
.myComponent { … }

// Component child
.myComponent-element { … }
.myComponent-element-elementChild { … }

// Component modifier
.myComponent--modifier { … }

// Component state
.myComponent.is-state { … }

// JS for component
.js-myComponent { … }
```

## Icon design
Works on `app/assets/icon.sketch` file.
Create a new artboard 512*512 for icon and name it.
Vectorize all the strokes.
