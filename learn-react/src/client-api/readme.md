# createRoot(domNode, options?)

- Create a react root for displaying content inside a DOM.
- createRoot() return object with two methods render, unmount.
- To server-render component use hydrateRoot() api.
- To Render JSX from different part of the tree which is not child of current component then use createPortal() instead of createRoot(). E.g. modal, tooltip, etc.
- More than one createRoot are allowed in the project.
- root.render(react_node/createElement) returns `undefined`

```js
const secoundRoot = ReactDOM.createRoot(document.getElementById("secoundRoot"));

secoundRoot.render(<UseStateExamples />);
// calling render on same root donot render entire tree
// react will make decision on which part of DOM can be reused and which part needs to be re-render from the previously render tree.
secoundRoot.render(<UseStateExamples />);
```

- root.unmount() to destroy a rendered tree inside a react root. Detach react from root DOM node, including removing event handlers or state in the tree.
- root.unmount() do not accept any parameters and return `undefined`.
- we can not render root which is unmounted. Instead create new root after previous one.

- Error Handling (canary)

1.  Show dialog for uncaught errors

```js
const secoundRoot = ReactDOM.createRoot(
  document.getElementById("secoundRoot"),
  {
    onUncaughtError: (error, errorInfo) => {
      console.error("Uncaught error", error, errorInfo.componentStack);
    },
  }
);
```

2. Displaing Error Boundary errors

```js
const root = createRoot(document.getElementById("root"), {
  onCaughtError: (error, errorInfo) => {
    console.error("Caught error", error, errorInfo.componentStack);
  },
});
root.render(<App />);
```

# hydrateRoot(domNode, reactNode, options?) :- hydration is done on server components only.

- only one hydrateRoot allowed
- if component served by server and component renderd by client are missmatched then react switch to client rendering. See following error message.
- Hydration failed because the initial UI does not match what was rendered on the server.

# createPortal(children, domNode, key?)

- childern node is placed inside DOM node, it teleport children component to domNode given.
- A portal only cj=hanges the physical placement of the DOM mode.
-
