# Table of content

- [useState()](#usestate)
- [useEffect()](#useEffect)
- [useReducer()](#useReducer)
- [useRef()](#useRef)
- [custom hook](#custom)

# useState() <p id='useState'>

This hook is used to store local data in the component. This hook return array object of state value variable and function to update that state. use Array destructuring to work on it.

React re-render that component on state changes. React compare these state changes differently for primitive state values and object state values.

Object are compared by reference of the object (shallow comparison). Primitive are compared by values.

If these comparision is false then react re-render component if true then state are not changed so no re-rendering.

Function as a initial state (initializer function)=> Function should be pure, should take no argument and return value of any type. Function with no return as initialstate returns 'undefined' on re-render.
To avoid creating initial state on each re-render we use initializer function. Passing initializer directly will call on each re-render so it is less efficient. Do not call initializer in useState(initializer()) instead pass it as useState(initializer).

Function as a nextState (updater function)=> It must be pure function , should take pending state only argument and return next state. Example of updater function setState(c => c + 1)

```js
// set function as a state, use () =>, otherwise they are called as initializers or updaters
const [state, setState] = useState(() => someFunction);

setState(() => someOtherFunction);

// react updaters from previous state
function handleClick() {
  // react put them in a queue
  setAge((age) => age + 1); // setAge(42 => 43)
  setAge((age) => age + 1); // setAge(43 => 44)
  setAge((age) => age + 1); // setAge(44 => 45)
}
```

`set` functions do not have return values.

`set` function only set value for next render. If you log state after set function you will get old value. set function only set value for next re-render, if we call it after setting new value then we get old value because old value is the value used by old render. This is because of diffing algorithm. Diffing algorithm use Object.is() to compare old with new, if it is false then re-render component.

Do not call `set` update function while rendering current component, it will render component infinitely and it will crash. Calling another component 'set' while rendering is also an error.
If you want to call `set` while rendering then use condition statements to call it or use useEffect().

`Only component, initializer, and updater functions need to be pure. Event handlers don’t need to be pure, so React will never call your event handlers twice.`

```js
if (preCount !== count) {
  setStatus(count > preCount ? "⏫" : "⏬");
  setPrecount(count);
}
```

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

Cleanup function is run on after re-rendering of component as well as after component removed from DOM.

# useRef(initialValue) <p id='useRef'>

useRef is used for referencing a value of an element in the component. Also we use this ref to manipulate DOM element.

InitialValue :- Initial value is the value of ref's object current property. It can be of any type null or undefined. This value is set as current value on initial render. This value is ignored by react after initial render.

useRef returns object with single property current.

- 1. mutation Vs rendering :- unlike state we can mutate current value but it will not re-render on mutation.
     But if it holds some state value then we should not mutate it.
- 2. do not read or write ref current during rendering, this will create unpredicable component.
- 3. useRef are not mean to be store data that is shown on the screen, instead use useState.
- 4. function components can not be given ref's. Encapsulate child component in `forwardRef()` then pass ref to children component.

  ```js
  //   initializing ref : initial value is null
  const inputRef = useRef(null);
  // do not read/write while rendering component because it's initial value is null while rendering
  // then on next line its value is overwritten with 'hi'. This will make our component unpredicable.
  // on each re-render we can not get updated value of current because value is overwritten.
  inputRef.current = "hi";

  const inputRef = useRef("string"); //initial value is primitive string type
  inputRef.current.value = "hi"; //Error: can not set value property on 'string'
  // if initial value is object {value:stirg} it will not throw error but still it will overwrite all updated ref current values with 'hi' on each re-render.
  ```

# useReducer(reducerFun, initialState) <p id='useReducer'>

When state logic for a component become complex then we combine all state logic into a single function, this function is reducer() function.

useReducer returns array of component state and dispatch function to update the state. This dispatch function is different from set functions. This function takes action as a argument.

```js
export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  // OR slightly more accurate, action is queued until the next render
  const dispatch = (action) => {
    setState((s) => reducer(s, action));
  };

  return [state, dispatch];
}
```

# custom hooks <p id='custom'>
