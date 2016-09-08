# HelloFront

HelloFront is a theme SCSS of starting up of compatible project from IE10.

View HelloFront on [Github](https://github.com/sutter/helloFront)

* * *

## SCSS guidelines

* * *

### Syntax and Formatting

* Two (2) space indents, no tabs;
* 80 character wide columns;
* multi-line CSS;
* meaningful use of whitespace.

* * *

### Organization of files SCSS

* **base/** : Unclassed HTML elements (type selector)
* **components/** : Designed components, chunks of UI
* **tools/** : Default mixin and functions
* **utils/** : Helpers and overrides
* **_settings.scss** : Global variables
* **main.scss** : Main stylesheet

* * *

### CSS naming convention

```css
/* Component */
.myComponent { … }

/* Component child */
.myComponent-element { … }
.myComponent-element-elementChild { … }

/* Component modifier */
.myComponent--modifier {
  .myComponent-element { … }
  .myComponent-otherElement { … }
}

/* Component state */
.myComponent.is-state { … }

/* JS for component */
.js-myComponent { … }
```
* * *

### Comments

```css
/** ======================================
 * Comment : level 1
 * ======================================= */
 
 .myComponent { … }
 
/**
* Comment : level 2
* --------------------------------------- */

.myComponent--modifier { … }
  
/* One line comment */

/**
 * Multilines comment
 * Other line
 */
```
