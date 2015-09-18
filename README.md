# helloFront

Demo : [http://sutter.github.io/helloFront/](http://sutter.github.io/helloFront/)

Simple starter for clean Front-end project.

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
* Optimise styles and regroup media queries

```
gulp --production
```

### Deploy on GithubPages

```
gulp deploy
```

## SCSS Structure

This starter use *Normalize.css* with *NPM*.

* **application.scss** : Main stylesheet
* **_settings.scss** : Global variables
* **tools** : Default mixin and functions
* **base** : Unclassed HTML elements (type selector)
* **components** : Designed components, chunks of UI
* **utils** : Helpers and overrides
## Naming convention

```
.myComponent {}
.myComponent.is-state {}
.myComponent--modifier {}

.myComponent-element {}
.myComponent-anotherElement {}
```
