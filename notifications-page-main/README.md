# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Notifications page](/design/solutionpage.png)

### Links

- Solution URL: [Notifications page on github](https://github.com/ShubhamOulkar/frontend/tree/main/notifications-page-main)
- Live Site URL: [Notifications page live](https://frontend-shubhamoulkars-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

In short, I have learned some advanced CSS techniques that can help me create more flexible, robust, and efficient designs.

1. Variable fonts and static fonts as fallback

```css
/* Set up Plus Jakarta Sans for modern browsers, weights range from 500 to 800 */
@supports (font-variation-settings: normal) {
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url("/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf") format("truetype");
    font-weight: 500 800;
    font-stretch: 25% 151%;
  }
}
```

2. New CSS feature: & nested selectors

```css
@media (width<900px) {
    width: 80%;

    @media (width < 536px) {
      width: 100%;
      padding: 0.5rem;
      margin-block: 0;
      border-radius: 0;
    }
```

### Continued development

I want to focus on SEO and web accessibility while development. Also I want use oklch() colors for better human visibility.

### Useful resources

- [Notification design](https://www.toptal.com/designers/ux/notification-design) - This helped me to understand use cases of notification page.
- [I learned variable font on web dev](https://web.dev/articles/variable-fonts)

## Author

- Github - [@ShubhamOulkar](https://github.com/ShubhamOulkar)
- Frontend Mentor - [@ShubhamOulkar](https://www.frontendmentor.io/profile/ShubhamOulkar)
- Twitter - [@shubhuoulkar](https://twitter.com/shubhuoulkar)
