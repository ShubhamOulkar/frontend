# Table of content

- [useState()](#usestate)
- [useEffect()](#useEffect)
- [useReducer()](#useReducer)
- [useRef()](#useRef)
- [custom hook](#custom)

# useState() <p id='useState'>

This hook is used to store local data in component. This hook return array object of variable state value and function to update that state. use Array destructuring to work on it.

React re-render that component on state changes. React compare these state changes differently for primitive state values and object state values.

Object are compared by reference of the object (shallow comparison). Primitive are compared by values.

If these comparision is false then react re-render component if true then state are not changed.

# useEffect(setup:fn, dependencies:[]): undefined <p id='useEffect'>

useEffect let component to connect and synchronise with external system i.e. outside of react environment.
For example document object model, fetch data from a database, chat system, video calling system, timers, event listeners, animations, window object.

useEffect hook is used to perform side effects in a component. useEffect runs after vertual DOM is updated or change in state in state and props.

This hook use function as 1st parameter, and dependency array as secound. If secound parameter is not given then effect will run after every render.

Pass secound variable in array to only re-run if that variable changes. If empty [] is given than useEffect run only once.

```js
useEffect(() => {
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes
```

Multiple useEffect() hooks are allowed in react component.

Usually impure functions have side effect, following are some examples of impure functions :-

- Updating variable outside the function
- logging into the console
- fetching data from database
- using date and time

Cleanup unused resources by returning an optional function inside the effect.

```js
function LittleLemonChat(props) {
  const [status, chatStatus] = useState("offline");

  useEffect(() => {
    LemonChat.subscribeToMessages(props.chatId, () => setStatus("online"));

    return () => {
      setStatus("offline");
      LemonChat.unsubscribeFromMessages(props.chatId);
    };
  }, []);

  // ...
}
```

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

Note:-

- 1. Without dependency array :- useEffect() will run on every re-render i.e. if prop or state changes this will run side effect as well.
- 2. With empty array [] :- This will run effect only once on first render. It will not run on any state or prop changes.
- 3. Dependency array :- Effect will run on change in depedency variables only. Any other changes will not run side effect.

#### Cleanup function in useEffect:- Cleanup function is a function which is return by useEffect. It is optional. This functions is basically stops and undoes whatever setup function is doing. When component is added into DOM, then react will run 'Setup' function. After every re-render with changed dependencies, react will first run 'Cleanup' function with old values then it runs 'Setup' function with new values. Cleanup function also run after component is removed from DOM.

# Q. When will react run cleanup function?

Cleanup function is run on after re-rendering of component as wel as after component removed from DOM.

# useReducer() <p id='useReducer'>

# useRef() <p id='useRef'>

# custom hooks <p id='custom'>
