# useState()

This hook is used to store local data in component. This hook return array object of variable state value and function to update that state. use Array destructuring to work on it.

React re-render that component on state changes. React compare these state changes differently for primitive state values and object state values.

Object are compared by reference of the object (shallow comparison). Primitive are compared by values.

If these comparision is false then react re-render component if true then state are not changed.

# useEffect()

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
