# Learn React

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
