#### [Get react hooks short notes here](/learn-react/src/hooks/readme.md)

# Learn React : General questions

- 1. What is react component? :- react components are JavaScript pure functions.
- 2. What is synthetic events? :- it is cross-browser wrapper around browser events. it make sure same behaviour in all browsers.
- 3. What is prop drilling? :- passing data from parent component to its child component, then to a grandchild component and so on, until it reaches a target component down the component tree where data is required.
- 4. can we pass key as props ? No, we can not pass key as props to child component.
- 5. Always use unique Id as key prop to prevent re-rendering of component in react.
- 6. Use spread (...) operation first before manipulating any object property, otherwise it will not overwrite property of the object.
- 7. Uncontrolled input example :- they are not powerful as controlled inputs. type="file" input is always uncontrolled input because it is read-only value.

  ```js
  function Input() {
    const inputRef = useRef(null);

    function handleOnSubmit() {
      const inputValue = inputRef.current.value;
      return inputValue;
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input ref={inputRef} type="text" />
            <button type='submit' >Submit<button />
        <form />
    )
  };
  ```

- 8. Controlled Input :- Controlled input use callbacks to update local state data.

  ```js
  function ControlledInput(){
    const [state, setState] = useState('');

     function handleOnChange(e) {
        setState(e.target.value);
    }

    function handleOnSubmit(e){
        e.preventDefault();
        setState('');
        console.log('Form is submitted!');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={state} onChange={handleOnChange}/>
            <button diasble={!state} type='submit' >Submit<button />
        <form />
    )
  };
  ```

- 9. What is different between controlled components and uncontrolled components? :- Controlled components are controlled by local states where as uncontrolled components are controlled by DOM(useRef) itself.
- 10. What will happen on submitting the form ? :- Default behaviour of the form i.e. Root of the server and refrashing the page. To stop this happening use current submit event and call preventDefault() on it.
- 11. Disable the submit button if input is empty by using !state.
- 12. What is similarity between prop and state? :- Both are js objects and render component on update.
- 13. What is difference between prop and state? :- State are local to component, and props are passed as parameters to the component. Props are immutable with in component and state are updated with user interactions. We can say that state are private to the component.
- 14. What is stateless and statefull components?
      Stateless Components:- only have props, no state. (visualizations)
      Statefull Component:- have both props and state.
      Statefull component manage client-server communication, data processing and responding to user events.
- 15. What is context? why it is used?
      It is api to teleport information from parent to deep child component without using prop any drilling.
      Some times we need to pass data all levels in the component tree via props even though intermediatory component do not need this data. This is cumbersom task. We minimise this unneccessary task by using context.
- 16. What is problem with using context? :- On context data change all children down in the tree are re-render even if children dont use context data. To stop this re-rendering use memoization.
- 17. What are the rules of hooks? :-
      - Only call hooks from react component functions. (dont use in class component)
      - Only call hooks at the top level in function
      - Do not use hooks inside conditions

- 18. Possible use cases with components

| Feature                                   | Uncontrolled | Controlled |
| ----------------------------------------- | ------------ | ---------- |
| One-time value retrieval (e.g. on submit) | Yes          | Yes        |
| Validating on submit                      | Yes          | Yes        |
| Instant field validation                  | No           | Yes        |
| Conditionally disabling a submit button   | No           | Yes        |
| Enforcing a specific input format         | No           | Yes        |
| Several inputs for one piece of data      | No           | Yes        |
| Dynamic inputs                            | No           | Yes        |

- 19. What are the limitations of useState() hook?

  - Complex state logic where next state depends on previous state
  - not best on more complex data like arrays or objects
  - it is hard to maintain if state gets more complex

- 20. When to choose useReducer over useState ?

  - best used on more complex data arrays and objects
  - state has three or more properties

- 21. When to use custom hooks? :- A custom hook is simply a way to extract a piece of functionality that you can use again and again. Put differently, you can code a custom hook when you want to avoid duplication or when you do not want to build a piece of functionality from scratch across multiple React projects. By coding a custom hook, you can create a reliable and streamlined way to reuse a piece of functionality in your React apps.

```js
export default function useConsoleLog(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
```

- 22. What are valid types of children in component? :-

  - Strings literals
  - JSX elements
  - JSX expressions
  - functions
  - null, undefined, false, true are all valid childrens but do not render anything. (except zero '0') (these are useful while conditional rendering)

- Following children render same output
  `<div />`
  `<div></div>`
  `<div>{false}</div>`
  `<div>{null}</div>`
  `<div>{undefined}</div>`
  `<div>{true}</div>`
