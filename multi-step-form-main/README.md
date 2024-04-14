# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
      - [- Solution URL: on github](#--solution-url-on-github)
      - [- Live Site URL: multi-step-form](#--live-site-url-multi-step-form)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [1. Web Components](#1-web-components)
      - [2. Styling web components from shadow tree](#2-styling-web-components-from-shadow-tree)
      - [3. State change management and form validations](#3-state-change-management-and-form-validations)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](/multi-step-form-main/design/step1-desktop.png)
![](/multi-step-form-main/design/step2-desktop.png)
![](/multi-step-form-main/design/step3-desktop.png)
![](/multi-step-form-main/design/step4-desktop.png)

### Links

#### - Solution URL: [on github](https://github.com/ShubhamOulkar/frontend/tree/main/multi-step-form-main)

#### - Live Site URL: [multi-step-form](https://frontend-shubhamoulkars-projects.vercel.app/multi-step-form-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Web components (template, slot)

### What I learned

#### 1. Web Components

```html
<template id="step-heading">
  <div part="heading">
    <slot name="heading">
      <h1>Put heading here</h1>
    </slot>
    <slot name="description">
      <p>Put description here.</p>
    </slot>
  </div>
</template>
```

#### 2. Styling web components from shadow tree

```css
::slotted(:is(price, info)) {
  font-family: "ubuntu-regular", sans-serif;
  font-size: 1rem;
}
```

#### 3. State change management and form validations

### Continued development

- [] Performance optimization
- [] Prograssive web app
- [] Error from html validator (child templates are not valid inside add-on element.)

![error-template](https://github.com/ShubhamOulkar/frontend/assets/91728992/af4d57ea-d414-4ed6-81fa-cdf3ae5e22d4)

### Useful resources

- [Templates, slots and DOM shadow](https://web.dev/learn/html/template?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fhtml%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fhtml%2Ftemplate) - This helped me for creating web components.
- [MDN Web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

## Author

- GitHub -[@ShubhamOulkar](https://github.com/ShubhamOulkar)
- Frontend Mentor - [@ShubhamOulkar](https://www.frontendmentor.io/profile/ShubhamOulkar)
- Twitter - [@shubhuoulkar](https://twitter.com/shubhuoulkar)
