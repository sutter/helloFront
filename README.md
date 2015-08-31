# helloFront
Simple starter for clean Front-end project.

This starter use [Bourbon library](http://bourbon.io/)

Copy SCSS folder from [HelloCSS](https://github.com/sutter/helloSCSS/tree/master/app/assets/scss)

Work on **app/** folder and gulp build in **dist/**.

## Installation

### Install NodeJs
Go to [NodeJS.org](http://NodeJS.org) for installation.

### Install Sass
Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Bourbon

In your terminal :

```
gem install 'bourbon'
```

If you have an error saying "You don't have write permissions", use :

```
sudo gem install 'bourbon'
```

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
* [CSSO](https://en.bem.info/tools/optimizers/csso//) (minify and optimise) Styles and regroup media queries

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
