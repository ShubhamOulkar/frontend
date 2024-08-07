const questions = [
  {
    type: "mcq",
    ques: "Imagine that you have an App component and a Footer component in the same location, at the root of the src folder. Choose the proper way to import the Footer component into the App component.",
    options: {
      1: "import Footer from Footer.js;",
      2: "import 'Footer' from 'Footer';",
      3: 'import Footer from "./Footer";',
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "True or False: In React, you can never move a component to a separate file.",
    ans: false,
  },
  {
    type: "bool",
    ques: "True or False: You can omit the import keyword when importing one component into another in React.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "The code that follows is the first line of the App.js file. What does this line do? import Sidebar from './Sidebar.js';",
    options: {
      1: "It imports a Sidebar component from the Sidebar.js file, which is located in the same folder as the App.js file.",
      2: "It imports a Sidebar component from the Sidebar folder into the App.js file.",
      3: "It imports a Sidebar component into the Sidebar folder, and then this entire folder is imported into the App.js file.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What type of casing should be used when adding a component name after a function keyword?",
    options: {
      1: "kebab-cased",
      2: "lowerCamelCase",
      3: "PascalCase (UpperCamelCase)",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "There are two components at the root of the src folder: Example and App. What syntax should you use to import the Example component into the App component?",
    options: {
      1: "import Example;",
      2: 'import Example from "./Example"',
      3: "import “Example”;",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "True or False: You can omit the ./ from the import statement when both the exported and the imported components are in the same folder.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "Pick the correct syntax needed to export a component so that it can be imported.",
    options: {
      1: "export example;",
      2: "export default Example;",
      3: "export standard Example;",
      4: "export default;",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "You've imported the Example component into the App component. What will the following syntax do: return ( <Example /> )?",
    options: {
      1: "It will throw an error.",
      2: "It will show a warning.",
      3: "It will render the App component on the screen.",
      4: "It will render the Example component on the screen.",
    },
    ans: 4,
  },
  {
    type: "select",
    ques: "In React, functional components are reusable blocks of code that act like a JavaScript function and you can pass data from one component to another using props. Which of the following statements are true? Select all that apply. ",
    options: {
      1: "Props are passed using JSX syntax.",
      2: "Props are like a JavaScript object.",
      3: "When two components communicate with each other, the component sending the props data is known as the parent and the one receiving the data is known as the child.   ",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "Which of the following can be defined as a parameter within a functional component?    ",
    options: {
      1: "return statement",
      2: "function",
      3: "props",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What is the error in the code below?",
    code: "function Greeting() {return <h1>Hello, {props.name}h1>}export default Greeting",
    options: {
      1: "You need to add extra spacing after the function's name.",
      2: "You should always add a pair of parentheses after the return keyword.",
      3: "The Greeting function should receive a props parameter.",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "True or False: You can pass a prop to a component by adding an attribute to the component being rendered, with the attribute’s value becoming the value of the passed-in prop.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or False: In React, props is an object.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or false. You need to define how React should render a component. Can you use a regular JavaScript function to complete this action? ",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or false? Using React, you can easily convert a CSS rule to a JavaScript object, where each key-value pair describes a CSS declaration.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "You would like to use JSX to display a user’s location on a webpage, and you have defined the following JavaScript variable: const location = Boston;  Which of the following lines of code uses the correct syntax for embedding this variable in an HTML paragraph element?",
    options: {
      1: "const result = <p>location</p>;",
      2: "constresult = <p>Boston</p>;",
      3: "const result = <p>{location}</p>;",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "True or False: In React, you need to import a component multiple times – as many times as you plan to render it from its parent’s return statement.",
    ans: false,
  },
  {
    type: "bool",
    ques: "True or false: You can render more than one child component from the parent component.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "What is wrong with this code?",
    code: "function App() { return (<BlogCard /> <BlogCard /> <BlogCard />)}",
    options: {
      1: "There is no JSX attribute used when rendering the BlogCard components.",
      2: "There is no props object passed to the App component.",
      3: "There is no props object passed to the App component.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Why is React using the concept of components? ",
    options: {
      1: "It allows you to build more modular apps.",
      2: "It allows the browser to render your pages faster.",
      3: "It helps accessibility readers for people who are visually impaired.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What is the absolute minimum code that a component must have to be able to show something on a screen when rendered? ",
    options: {
      1: "A named function declaration.",
      2: "A named function declaration and an array of items inside of the function's body.",
      3: "A named function declaration and a return statement with at least a single element with some text inside of it.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What are the benefits of using props? ",
    options: {
      1: "Props allow developers to write custom HTML tags. ",
      2: "Props allow children components to update the values of each prop independent from their parent component. ",
      3: "Props allow parent components to pass data to children components. ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "You are tasked with building a web layout using React. The layout should have a header, a footer, and three products showing various data in the main part of the page. Choose the preferred component structure. ",
    options: {
      1: "It should all fit into a single component named App component.",
      2: "It should have a separate component for each link, paragraph, heading, etc. ",
      3: "It should have the following components: Header, Main, Product, Footer (with the Product component being imported into Main and rendered three times).",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Which of the following keywords can you usually find in a React component? ",
    options: {
      1: "function, props, return, export, default",
      2: "function, props, export, import, contain",
      3: "modular, expression, prop, default ",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What is create-react-app?",
    options: {
      1: "It’s a command you can use in a component.",
      2: "It’s a command you run when you want to serve your app in the browser.",
      3: "It’s an npm package used to build a boilerplate React app.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Imagine you want to build a brand new React app, named “example”. Choose the correct command to build a starter React app to work off of. ",
    options: {
      1: "npm initialize react-app example",
      2: "npm install react-app example ",
      3: "npm init react-app example",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "True or false? When you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.",
    ans: true,
  },
  {
    type: "bool",
    ques: "rue or false? You can use function calls in JSX.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or false? When an arrow function has a single parameter, you do not need to add parentheses around the item parameter (to the left of the arrow).",
    ans: true,
  },
  {
    type: "mcq",
    ques: "Choose a React event-handling attribute.",
    options: {
      1: "onclick",
      2: "React.on-click",
      3: "onClick",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "Event handlers make sure that the actions of events are executed. To set up the click handling behavior for a button, you can use an expression named clickHandler.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "When handling a click event in react, you should use the following attribute:",
    options: {
      1: "OnClick",
      2: "onClick",
      3: "on-click",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "Choose the valid example of an onclick event handler",
    options: {
      1: "<button onClick={handleClick}>Click me</button>",
      2: "<button on-click=”handleClick”>Click me</button>",
      3: "<button onClick={handleClick()}>Click me</button>",
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: "Inside a JSX element, you can assign a JSX expression to the onClick handler to handle a click in React.",
    ans: true,
  },
  {
    type: "bool",
    ques: "You can place an opening and a closing parenthesis after the name of the event-handling function that you assign to the onClick attribute.",
    ans: false,
  },
  {
    type: "bool",
    ques: "The try...catch syntax can be used in React in certain cases.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or false? You can use the onclick event-handling HTML attribute to handle click events.    ",
    ans: true,
  },
  {
    type: "mcq",
    ques: "What's wrong with this code?",
    code: "<button onClick={handleClick()>Click me</button>}",
    options: {
      1: "This code should work",
      2: "The event-handling attribute should be all lowercased",
      3: "You cannot invoke an event-handling function from a JSX expression.",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "In React, a click handler is placed inside a JSX expression, and only needs a click handler function's name - without the parentheses to invoke it.",
    ans: true,
  },
  {
    type: "bool",
    ques: "In React, you are not allowed to code a separate function that should be run to handle a click event.",
    ans: false,
  },
  {
    type: "bool",
    ques: "Event-handling attributes in React are named almost the same as in HTML. Syntactically, the only difference is in the capitalization.",
    ans: true,
  },
  {
    type: "bool",
    ques: "Is a click handler on its own enough to change the values of variables in your React apps?",
    ans: false,
  },
  {
    type: "mcq",
    ques: "Imagine that you have a variable named userLoggedIn and it’s set to the boolean of true. How would you complete the below clickHandler function declaration to toggle the value of the userLoggedIn boolean?",
    options: {
      1: "userLoggedIn = !userLoggedIn",
      2: "userLoggedIn = false",
      3: "userLoggedIn = true",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What are the ways to write an event-handling function in React. Select all that apply.",
    options: {
      1: "Using a separate function expression",
      2: "With an inline anonymous ES5 function",
      3: "Using a separate function declaration",
      4: "With an inline, anonymous ES6 function (an arrow function)",
    },
    ans: [1, 2, 3, 4],
  },
  {
    type: "mcq",
    ques: "What are the advantages of utilizing a centralized point of data - a 'single source of truth' - in your React apps? Choose all that apply.  ",
    options: {
      1: "Data flows both ways, so it can be edited from anywhere ",
      2: "It reduces the possibility of typing errors in your code",
      3: "It offers a more efficient way of working when data frequently changes",
      4: "It allows you to edit multiple items from a single point",
    },
    ans: [2, 3, 4],
  },
  {
    type: "mcq",
    ques: "Which of the following statements about data flow in React are correct? Select all that apply.",
    options: {
      1: "The props data is data outside the component and cannot mutate.",
      2: "Data can flow from parent to child and in the other direction with state data.",
      3: "State data is data inside the component, and the component can control and mutate the data.",
      4: "The props data is data outside the component and can mutate.",
    },
    ans: [1, 3],
  },
  {
    type: "bool",
    ques: "Usually, a React app consists of many components, organized as a component tree.",
    ans: true,
  },
  {
    type: "bool",
    ques: "You can only pass a single prop to a component",
    ans: false,
  },
  {
    type: "mcq",
    ques: "The props parameter is:",
    options: {
      1: "object",
      2: "boolean",
      3: "array",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "A component can, at any given time_______. Select all that apply.",
    options: {
      1: "Pass data as prop",
      2: "Receive data a s prop",
      3: "Pass data as props and receive data as props at the same time",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "Uni-directional data flow is...",
    options: {
      1: "The term that describes the one-way flow of data in a React app.",
      2: "The term that describes the one-way flow of components in a React app",
      3: "The term that describes the one-way flow of DOM updates in a React app",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Which of these rules apply to hooks in React?  Check all that apply.",
    options: {
      1: "Hooks can be called only at the top level.  ",
      2: "Hooks can be called only from React functions.",
      3: "Hooks can be called from any JavaScript function.",
    },
    ans: [1, 2],
  },
  {
    type: "mcq",
    ques: "Select rules applied to all react hooks.",
    options: {
      1: "You can only call hooks at the top level of your component or your own hooks.",
      2: "You cannot call hooks inside loops or conditions.",
      3: "You can only call hooks from React functions or custom react hook function, and not regular JavaScript functions.",
    },
    ans: [1, 2, 3],
  },
  {
    type: "bool",
    ques: "A parent component is able to pass its state onto children components using props. True or false? ",
    ans: true,
  },
  {
    type: "mcq",
    ques: "Consider the following line of code, which contains a useState hook: const [date, setDate] = React.useState(new Date()); Which argument updates the state? ",
    options: {
      1: "setDate",
      2: "date",
      3: "none of the above",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Choose the correct statement.",
    options: {
      1: "The props object represents data that is internal to a component, and state represents data that is external to a component.",
      2: "The props object represents data that is external to a component, and state represents data that is internal to a component.",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "In React, can state be considered data?",
    ans: true,
  },
  {
    type: "bool",
    ques: "In React, can props be considered data?",
    ans: true,
  },
  {
    type: "mcq",
    ques: "What does the useState hook do?",
    options: {
      1: "It allows a component to have its own state",
      2: "It allows a component to receive state from its parent",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Based on the code below, is the userName variable external or internal data of the DisplayUser component?",
    code: "function DisplayUaer(props){return (<h1>{props.useerName}</h1>)}",
    options: {
      1: "The userName value is data that is internal to the DisplayUser component",
      2: "he userName value is data that is external to the DisplayUser component",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "Lifting state up is coding your app so that the state from the child component is moved to the parent component and the child component simply receives it via props",
    ans: true,
  },
  {
    type: "mcq",
    ques: "What is context consumer?",
    options: {
      1: "The App component is the context consumer.",
      2: "The index.js file is the context consumer",
      3: "Context provider is the context consumer.",
      4: "It's the component that uses the context provider's state.",
    },
    ans: 4,
  },
  {
    type: "bool",
    ques: "When working with useState to keep state in a variable, you should not use array destructuring.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "What is the Context API?",
    options: {
      1: "An alternative way to working with state in React.",
      2: "A way to change the execution context of a function in JavaScript.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "If a state variable is destructured from useState, and set to variable name of user, the name of the function to update the user state variable should be...",
    options: {
      1: "useState",
      2: "setUser",
      3: "useUser",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "What does the concept of “lifting up state” entail?",
    options: {
      1: "It involves moving the state from the child component to the parent component.",
      2: "It involves moving the state from the parent component to the child component.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What is a negative result of lifting up state in a React app?",
    options: {
      1: "Prop drilling",
      2: "There are no negatives from lifting up state in React.",
      3: "It can significantly increase the number of components that you need to create",
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: "If the state variable holds an array or a string value, once you pass that state via props from a parent to a child, you can then read the length property from the received prop in the child component.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "Choose the correct statement.",
    options: {
      1: "Remember that you should always change the values of props in children components; you should never work with them as they are. In other words, props are mutable.",
      2: "Remember that you should never change the values of props in children components; you should only work with them as they are. In other words, props are immutable.",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "The distinction between stateful and stateless components is that the latter doesn't have its own state. ",
    ans: true,
  },
  {
    type: "mcq",
    ques: "What is prop drilling?",
    options: {
      1: "Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required",
      2: "Prop drilling is a situation where you are passing data from a child, to a parent component, then to a grandparent component, and so on, until it reaches a more distant component further up the component tree, where this data is required.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "The Context API allows you to",
    options: {
      1: "Avoid having to pass state down through multiple levels of components.",
      2: "Avoid having to use the return statement in a child component.",
      3: "Avoid having to keep your components modular.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Which of the following statements are correct regarding how navigation is implemented in React? Select all that apply",
    options: {
      1: "Different views are rendered when React makes changes to the Virtual DOM, with React updating the real DOM accordingly",
      2: "Navigation in React is achieved by linking to HTML files",
      3: "In React, the entire app is loaded inside a single div, you're not actually visiting different pages.",
    },
    ans: [1, 3],
  },
  {
    type: "bool",
    ques: " True or False? You are building an app in React, and have written the following navigation link in your code: <a href='/' className='nav-item'>Contact Us!</a> When the user clicks this link, the app will navigate to the ‘Contact Us!’ page.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "How do React components turn into the webpage that you see?",
    options: {
      1: "In simple terms, React downloads a VDOM instance from the server to render all its pages.",
      2: "In simple terms, a React component gets downloaded from the server every time a user interacts with a React app.",
      3: "In simple terms, a React component has a one-to-one relationship to a HTML element that is displayed on the webpage and React keeps track of which HTML elements need to be updated. ",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "Is the following description true or false? A Single Page Application allows the user to interact with the website without downloading entire new webpages. Instead, it rewrites the current webpage as the user interacts with it. The outcome is that the application will feel faster and more responsive to the user.",
    ans: true,
  },
  {
    type: "bool",
    ques: "A SPA can’t have regular anchor tag elements like a traditional web app can. The reason for this is that an anchor tag will load another html file from a server and refresh the page.",
    ans: true,
  },

  {
    type: "mcq",
    ques: "Complete the sentence: an SPA comes with its own special implementation of anchor tags and links, which only give an illusion of loading different pages to the end user, when in fact they simply...",
    options: {
      1: "load different components into a single element of the virtual DOM into which the real DOM tree gets mounted and updated",
      2: "load a single component into multiple elements of the real DOM into which the virtual DOM tree gets mounted and updated",
      3: "load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated",
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: "A total page refresh is not the way that a SPA works.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or false: You can use JavaScript's logical AND operator in a React component's return statement to conditionally render some JSX elements based on whether a value to the right of the AND operator evaluates to true. ",
    ans: false,
  },
  {
    type: "mcq",
    ques: "True or false: You can use JavaScript's logical AND operator in a React component's return statement to conditionally render some JSX elements based on whether a value to the right of the AND operator evaluates to true. ",
    options: {
      1: "ternary operator",
      2: "switch statement",
      3: "if-else statement",
      4: "logical && operators",
      5: "logical || operators",
    },
    ans: [1, 2, 3, 4, 5],
  },
  {
    type: "mcq",
    ques: "What will be the output if you ran this code in the browser console:",
    options: {
      1: "undefined",
      2: "5",
      3: "null",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "Choose the correct syntax to build a new Date object in JavaScript?",
    options: {
      1: "Date()",
      2: "new Date()",
      3: "new Date",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "In React, you can import an image as you would any other module.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "In plain JavaScript, how do you build an instance of the Audio constructor?",
    options: {
      1: "new Audio();",
      2: "New Audio();",
      3: "Audio();",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "If an object instance of the Audio constructor is saved in a variable named “song”, what property on the “song” object can you use to check if the song is currently playing?",
    options: {
      1: "song.pause();",
      2: "song.paused",
      3: "song.play()",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "True or false? webpack is a module bundler.",
    ans: true,
  },
  {
    type: "bool",
    ques: "React Router has a <Link> element.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "React Router is...",
    options: {
      1: "A built-in part of React.",
      2: "A built-in part of React-DOM.",
      3: "A stand-alone package that you can add to a React app.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What will be the output of the code below?let name; if (Math.random() > 0.5) {   name = 'Mike'} else {   name = 'Susan'} ",
    options: {
      1: "It will always be Susan",
      2: "It will always be Mike",
      3: "It will be 0.5",
      4: "It will be sometimes Mike, and sometimes Susan, randomly",
    },
    ans: 4,
  },
  {
    type: "mcq",
    ques: "What is an asset?",
    options: {
      1: "Images, Fonts, Stylesheets",
      2: "Components",
      3: "Images, video and components",
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: "If your app can compile without it, you can keep an asset in a public folder.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "Which of the following is true about the map() method in JavaScript.Select all that apply.",
    options: {
      1: "The map() method is a collection of elements.",
      2: "The map() method is a transformation operation.",
      3: "The map() method returns a new array.",
      4: "The map() method is useful for handling third party data.",
    },
    ans: [2, 3, 4],
  },
  {
    type: "mcq",
    ques: "When you are working with lists in JSX, you can return a React component. What is the purpose of curly braces in this process? ",
    options: {
      1: "To access the needed properties from the initial data.",
      2: "To store the result of the transformation being performed.",
      3: "To access the content of the variable that represents your list item.",
      4: "To loop through the array of initial data.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "When using the filter operator from arrays in JavaScript, what type should you return from the predicate function to determine if the element should be filtered out or not?",
    options: {
      1: "You should return null if the element should be filtered out and any other value to keep the element.",
      2: "You should return true to keep the element and false to filter out the element.",
      3: "You should return undefined to filter out the element and true to keep it in the list.",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "When chaining the three array operators map, filter and sort; in which order should they be applied to props.data? Remember that props.data contains an array of dessert objects.",
    options: {
      1: "sort, filter, map",
      2: "filter, map, sort",
      3: "filter, sort, map",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "When using the map function to transform an array item into a <li> element, what of the following code snippets should be inside the <li> tag to render the list item correctly in the following format: Ice Cream - 200 cal",
    options: {
      1: "<li>${dessert.name} - ${dessert.calories} cal</li>",
      2: "<li>dessert.name - dessert.calories + “cal”</li>",
      3: "<li>{dessert.name} - {dessert.calories} cal</li>",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Which of the following statements about keys in React are true? Select all that apply.",
    options: {
      1: "Keys help React determine which items have changed, are added or are removed.",
      2: "Keys instruct React about whether a specific element’s internal state should be preserved or not.",
      3: "Keys instruct React how to treat a specific element when an update occurs. ",
      4: "Keys always positively impact app performance and user interface (UI).",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "Imagine you have an array with one object that represents a dessert. You would like to apply some transformation to the item to output a different structure using the map function as per the code below. What would be the value of the newDesserts variable?",
    code: `const desserts = [
  {
    title: 'Chocolate Cake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
  }
];

const newDesserts = desserts.map((dessert) => {
  return {
    title: dessert.title.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});`,
    options: {
      1: `[
  {
    title: 'CHOCOLATE CAKE',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    kCal: 0.5,
  }
]`,
      2: `[
  {
    title: 'Chocolate Cake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
    kCal: 0.5,
  }
]`,
      3: `[
  {
    title: 'CHOCOLATE CAKE',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
    kCal: 0.5,
  }
]`,
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: "True or false: It is recommended to use item indexes as keys when selecting keys for rendered list items.",
    ans: true,
  },
  {
    type: "mcq",
    ques: "How do you access dynamic data inside the JSX from the render function?",
    options: {
      1: "Using local state in the component",
      2: "Using component props.",
      3: "Wrapping the variable in question with curly braces. ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What could be a potential problem of using a randomiser function that generates an integer number from 0 to 10 as a key for your list items, having a list of only eight items? Select all that apply",
    options: {
      1: "The randomiser function does not entirely guarantee that the keys it generates will be different per item and a collision could happen, having two items with the same integer as keys.",
      2: "There is no persistence of the keys generated since the moment the component re-renders the keys will vary and that could cause unexpected UI changes. ",
      3: "The randomiser function is a potential performance bottleneck since it has to run every re-render and it’s an unnecessary computation.",
    },
    ans: [1, 2],
  },
  {
    type: "mcq",
    ques: "The todos array contains a list of todo objects, where each object has an id property that is unique. Which of the following code snippets will throw a React warning when opening up the browser console? Select all that apply",
    options: {
      1: `{todos.map((todo, index) => (
  <ToDo id={todo.id} />
))}`,
      2: `{todos.map((todo, index) => (
  <ToDo key={index} id={todo.id} />
))}`,
      3: `{todos.map((todo, index) => (
  <ToDo key={index} id={todo.id} />
))}`,
      4: `{todos.map((todo, index) => (
  <ToDo key={index} id={todo.id} />
))}`,
    },
    ans: [1, 4],
  },
  {
    type: "mcq",
    ques: "What are the potential problems of using indexes as keys?",
    options: {
      1: "An index is not guaranteed to be unique.",
      2: "The index is not persisted and will change the moment the component re-renders.",
      3: "If the order of items may change, that can negatively impact performance and may cause issues with component state.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "You are using controlled components in React in order to have more control over the forms in an application you are creating.Which of the following props is used to perform state delegation?",
    options: {
      1: "value",
      2: "onChange",
      3: "onSubmit",
      4: "action",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Imagine you’d like to better control the submission of a form you’re creating for an app. Which prop is required to prevent the default behavior of the form submit event in React?",
    options: {
      1: "preventDefault()",
      2: "stop()",
      3: "stopPropogation()",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What are the two props you need to add when creating a controlled input range component?",
    options: {
      1: "value and onChange",
      2: "min and max",
      3: "htmlFor and id",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "When you need to change the password state, which is stored as an object with two properties, value and isTouched, how should you correctly use the setPassword state setter inside the onChange event handler?",
    options: {
      1: "setPassword({ ...password, value: e.target.value });",
      2: "setPassword({ isTouched: false, value: e.target.value }); ",
      3: "setPassword({ value: e.target.value });",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What’s the correct event prop you should use to determine when an input has been interacted with at least once?",
    options: {
      1: "onFocus",
      2: "onBlur",
      3: "onChange",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "How do you prevent the default behavior of the form HTML tag in React when a submission event occurs?",
    options: {
      1: "By returning false from the onSubmit function prop that the form tag provides. ",
      2: "By calling preventDefault on the event object inside any onChange handler from an input tag.",
      3: "By calling preventDefault on the event object inside the onSubmit function prop from the form tag. ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What of the next input types doesn’t have a controlled version when they are used in React?",
    options: {
      1: "<textarea /> ",
      2: "<input type=”text” />",
      3: "<input type=”file” /> ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What are some of the features of controlled components? Select all that apply",
    options: {
      1: "Conditionally disabling the submit button.",
      2: "Enforcing a specific input format. ",
      3: "Validating all values in the client side when a submission occurs in the form, before calling the server endpoint.",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "How do you get the value of an input when its state is handled by the DOM (Uncontrolled)? Select all that apply.",
    options: {
      1: "Using a ref via useRef hook, assigning it to the input and then reading the input value when the submission happens via ref.current.value.",
      2: "Using local state and initializing it to an empty string. Then, reading the input value from the event object when the submission happens and finally setting the local state with that value.",
      3: "Using a combination of useEffect and useRef hooks, where a ref is used on the uncontrolled input and then its value can be read on useEffect after a re-render cycle happens. ",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What happens when you click on the submit button in the below code snippet?",
    code: `
     <form onSubmit={() => alert("Submitting")}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <input type="button" value="Submit" />
      </form>
    `,
    options: {
      1: "The onSubmit callback is executed and an alert is shown with the text 'Submitting'.",
      2: "An error is thrown.",
      3: "Nothing happens when the button is clicked.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What is missing in the below code for the select component to work properly?",
    code: `<select onChange={handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
 </select>`,
    options: {
      1: "Each option tag should be accompanied by a label tag.",
      2: "Each option tag should have an onChange handler.",
      3: "The select tag is missing a value prop. ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Which of the following statements are true about state in React? Select all that apply.",
    options: {
      1: "When designing a component, it must have state.",
      2: "State is a component's configuration.",
      3: "Attributes a component needs to change at some point in time shouldbe part of its state.",
      4: "State is managed within the component.",
      5: "State is a plain JavaScript object that React uses to hold information.",
    },
    ans: [2, 3, 4],
  },
  {
    type: "mcq",
    ques: "Which of the following is true about the Context API? Select all that apply.",
    options: {
      1: "Context requires you to pass props down manually at every level of thecomponent tree. ",
      2: "Context is the only way to pass data through the component tree.",
      3: "Context should be used when you need to share global data.",
      4: "Context was introduced by React as a way to resolve the props drillingproblem.",
    },
    ans: [3, 4],
  },
  {
    type: "mcq",
    ques: "When creating a Provider component, what should you do with the children prop that it receives?",
    options: {
      1: "Nothing, the children prop is not necessary and can be skipped during the rendering.",
      2: "You should clone the children  inside the component to add the context value to it. ",
      3: "You should wrap the JSX that it returns with a Context Provider component and then pass the children  through.",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Assuming that the default theme for the application is ‘light’, what should be the default value passed to the createContext call? Select all that apply.",
    options: {
      1: "undefined",
      2: "null",
      3: "The string 'light'",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "One of the parts of the context injected into the application is a function called toggleTheme. Assuming that the theme is held in some local state as a string that can be either ‘light’ or ‘dark’. What should be the exact implementation of the toggleTheme function?",
    options: {
      1: `toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")`,
      2: `toggleTheme: (theme) => setTheme(!theme)`,
      3: `toggleTheme: () => setTheme(theme === "light" ? "light" : "dark")`,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What of the below scenarios are valid for choosing context instead of local state? Select all that apply.",
    options: {
      1: "The locale or language that should be used in the application’s text.",
      2: "The current selection of a group of radio buttons.",
      3: "The visibility state of an alert that overlays into the whole application.",
    },
    ans: [1, 3],
  },
  {
    type: "mcq",
    ques: "Question What is the problem of props drilling? Select all that apply.",
    options: {
      1: "Components receiving more props than they should.",
      2: "Components not knowing the local state of their parents.",
      3: "Components having to pass down props all the way to the children that need to consume them.",
    },
    ans: [1, 3],
  },
  {
    type: "mcq",
    ques: "When creating a new piece of application state, what is the bare minimum of React APIs you would need to define it?",
    options: {
      1: "state, context",
      2: "state, context, prop",
      3: "state, prop",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What happens when the value prop of the Context Provider changes?",
    options: {
      1: "All the consumer components re-render with the updated value.",
      2: "The whole component tree under the Context Provider gets re-rendered.",
      3: "The Context Provider component gets recreated.",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What happens when you wrap a component with the React.memo API, such as React.memo(Component). Select all that apply.",
    options: {
      1: "Whether the component should re-render could be determined by some custom logic that uses the previous props and the current props.",
      2: "React provides a performance optimization.",
      3: "The component never gets updated no matter if there was a change in its local state or the props it receives.",
    },
    ans: [1, 2],
  },
  {
    type: "mcq",
    ques: "When using a key for your list items, what’s the best general choice?",
    options: {
      1: "Using an ID generated by a library that guarantees no duplications.",
      2: "Using an ID coming from the data, that points to the database ID.",
      3: "Using an index. ",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "Imagine you have a specification for rendering the following list item:<li>Ice cream - 200 cal</li>, where the name and the number of calories are coming as dynamic data. Select all the options that would correctly render the desired output:",
    options: {
      1: "<li>{Ice cream - 200 {item.cal}}</li>",
      2: "<li>{item.name} - {item.cal} cal</li>",
      3: "<li>{`${item.name} - ${item.cal} cal`}</li>",
    },
    ans: [2, 3],
  },
  {
    type: "mcq",
    ques: "Let’s suppose you have a list of two items and a new item is added to the list. From the point of view of the React diffing algorithm, what’s the most optimal position for the new element added? Select all that apply",
    options: {
      1: "The new element added at the beginning. ",
      2: "The new element added in the 2nd position, in between the existing list items.",
      3: "The new element added at the end. ",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "What are controlled components?",
    options: {
      1: "A set of components whose internal state is controlled by the DOM.",
      2: "A set of components whose internal state is controlled by React.",
      3: "A set of components whose value is determined by React refs.",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "What are the features you can still achieve with uncontrolled components? Select all that apply",
    options: {
      1: "One time value retrieval on submit using a React ref.",
      2: "Validation on submit.",
      3: "Conditionally disabling the submit button.",
    },
    ans: [1, 2],
  },
  {
    type: "mcq",
    ques: "When creating an API for context consumers via useContext, what’s the argument you have to provide to the useContext call?",
    options: {
      1: "The Context.Provider component.",
      2: "The Context object obtained via the createContext call.",
      3: "The React state that defines the global state to be injected.",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "Imagine the below component structure, where all components ComponentA, ComponentB and ComponentC are simple presentational components that hold no props or state. If the App component re-rendered for whatever reason, what would be the sequence of component re-renders that would take place?",
    code: `const App = () => {
  return(
    <AppContext.Provider>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => null;`,
    options: {
      1: "App -> ComponentA -> ComponentB -> ComponentC.",
      2: "App -> ComponentB -> ComponentC",
      3: "App",
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: "Even though props and state are inherently different, what are areas where they overlap? Select all that apply.",
    options: {
      1: "Both props and state are plain JS objects.",
      2: "Both props and state changes trigger a render update.",
      3: "Both props and state are deterministic, meaning that your component always generates the same output for the same combination of props and state. ",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "When defining a JavaScript object as a piece of local React state that will be injected as context, what is the specific React hook that allows you to keep the same object reference in memory and prevent unnecessary re-renders if the object itself hasn’t changed any values?",
    options: {
      1: "useCallback",
      2: "useMemo",
      3: "useRef",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "What are some possible examples of application features that are well suited to be defined as React context? Select all that apply",
    options: {
      1: "The application theme.",
      2: "Locale preferences.",
      3: "The current authenticated user.",
    },
    ans: [1, 2, 3],
  },
  {
    type: "mcq",
    ques: "Which of the following is true about the useState hook? Select all that apply.",
    options: {
      1: "The useState hook’s return value in React is the array data structure.",
      2: "The useState hook allows you to work with state in components.",
      3: "The useState hook invocation returns a two-member array.",
      4: "When using the useState hook, you must use the state-updating function to update state.",
    },
    ans: [1, 2, 3, 4],
  },
  {
    type: "bool",
    ques: "You can use an object with multiple properties as the initial value of the state variable.",
    ans: true,
  },
  {
    type: "bool",
    ques: "True or False: You can clone a JS object using the . operator (the dot operator).",
    ans: false,
  },
  {
    type: "bool",
    ques: "Is this a valid useState hook invocation and destructuring?const [car, setCar] = useState({ color: 'blue', mileage: 0})",
    ans: true,
  },
  {
    type: "mcq",
    ques: `Consider the following code:
const [person, setPerson] = useState({ name: 'John', age: 21})
Imagine you're using a setPerson() state-updating function to update the value of the state variable named person. You only want to update the value of age, from 21 to 22. Choose the correct code snippet to do that.`,
    options: {
      1: "setPerson(prev => ({ ...prev, age: 22 }));",
      2: "setPerson(() => ({ age: 22 }));",
      3: "setPerson(person.age = 22);",
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: "A pure function will perform a side effect.",
    ans: false,
  },
  {
    type: "mcq",
    ques: "How should you add a side effect functionality In React?",
    options: {
      1: "Using the useEffect hook",
      2: "Using an arrow function",
      3: "Using a dependency array",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "Imagine you have to log into the console a state variable, whenever the variable gets updated. What's the best place to perform such operation in a React component?",
    options: {
      1: "Before the return statement of the component",
      2: "the useEffect()",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "The useEffect hook accepts...",
    options: {
      1: "a callback function and an object",
      2: "a callback function and an array",
      3: "two callback functions",
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: "What is a pure React component?",
    options: {
      1: "A component that doesn't have any side effects",
      2: "A component that has at least one side effect",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "What is the name of the second argument of the useEffect() call?",
    options: {
      1: "Dependency array",
      2: "callback function",
      3: "dependency object",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "This code is incomplete, You need to update the dependecies array so that the useEffect hook is invoked whenever the toggle variable updates. Choose the correct solution from the choices below.",
    code: `React.useEffect(()=> {
 console.log('The value of the toggle variable is',toggle)
}, [])`,
    options: {
      1: "The dependencies array should receive the toggle variable as its single member. ",
      2: "The dependencies array should be removed. ",
      3: "The dependencies array should be updated to: [{toggle}].",
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: "In what sequence react run use effect logic in development?",
    options: {
      1: "setup --> cleanup function",
      2: "setup --> cleanup function --> setup",
      3: "It a bug in react",
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: `Is this code using a valid invocation of a hook?
            if (data !== '') { 
          useEffect( () => { 
            setData('test data') 
           }) 
        }
    `,
    ans: false,
  },
  {
    type: "mcq",
    ques: `Which of the below statements is an accurate description of JavaScript utilizing the fetch function?`,
    options: {
      1: `When JavaScript uses the fetch function it is performing each step ofthe process one by one, carrying out all of the required duties. This is known as single-threaded execution.`,
      2: `When JavaScript uses the fetch function it is delegating duties to an external API so that it can continue its process. This is known as single-threaded execution.`,
      3: `When JavaScript uses the fetch function it is delegating duties to an external API so that it can continue its process. This is known as asynchronous JavaScript.`,
      4: `When JavaScript uses the fetch function it is performing each step ofthe process one by one, carrying out all of the required duties. This is known as asynchronous JavaScript.`,
    },
    ans: 3,
  },
  {
    type: "bool",
    ques: `True or False: When invoking the fetch() function to get some JSON data from an API, you should pass it a URL.`,
    ans: true,
  },
  {
    type: "mcq",
    ques: `Choose the right way to handle the response from a fetch call.`,
    options: {
      1: `then( response => response.json())`,
      2: `then( response => json() )`,
      3: `then( json => response() )`,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: `True or False: After invoking the fetch() function, you need to add a call to the then() function.`,
    ans: true,
  },
  {
    type: "bool",
    ques: `True or false: You should not call hooks inside loops.`,
    ans: true,
  },
  {
    type: "bool",
    ques: `True or false: You should call hooks inside if statements.`,
    ans: false,
  },
  {
    type: "bool",
    ques: `True or false: You should call hooks inside nested functions.`,
    ans: false,
  },
  {
    type: "bool",
    ques: `True or false: You don't have to always make multiple hook calls in the same sequence.
`,
    ans: false,
  },
  {
    type: "mcq",
    ques: `You are allowed to:`,
    options: {
      1: `call multiple state hooks and effect hooks inside a component`,
      2: `only call a single state hook inside a component `,
      3: `only call a single effect hook inside a component.`,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: `Which of the following statements is true about the useReducer hook?`,
    options: {
      1: `The useReducer hookStarts with an initial state only `,
      2: `The useReducer hook starts with a reducer function only`,
      3: `The useReducer hook starts with an initial state and reducer function`,
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: `What is the data type of the returned value from the useRef hook invocation? `,
    options: {
      1: `object`,
      2: `array`,
      3: `string`,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: `True or False: You code a custom hook when you want to avoid duplication.`,
    ans: true,
  },
  {
    type: "mcq",
    ques: `Let's imagine you code a custom hook, called for example useNext, on a separate file named useNext.js 

What's the minimum requirement for the custom useNext hook to be a valid hook?`,
    options: {
      1: `The custom hook should always return a value`,
      2: `The custom hook should use at least one built-in React hook`,
      3: `The custom hook should always receive a parameter`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `A common scenario for using the useRef hook is to...`,
    options: {
      1: `...focus the cursor into an input field.`,
      2: `...control a component's state. `,
      3: `...handle side effects.`,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: `True or false: useReducer is a reducer function that takes in the initial state and an action and returns the new state.`,
    ans: true,
  },
  {
    type: "bool",
    ques: `True or false: The useState hook is best suited for complex state logic or when the next state depends on the previous one.`,
    ans: false,
  },
  {
    type: "mcq",
    ques: `The useState hook gives us a reliable way to...`,
    options: {
      1: `... deal with state updates in React components.`,
      2: `... deal with state updates in React prompts.`,
      3: `... deal with state updates in React dependency arrays.`,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: `True or false:  Building your own Hooks lets you extract component logic into reusable functions `,
    ans: true,
  },
  {
    type: "mcq",
    ques: `How is array destructuring relevant to hooks in React?`,
    options: {
      1: `It makes it possible to handle click events.`,
      2: `It makes it possible to reassign state objects.`,
      3: `It is a way to get individual items from an array of items, and save those individual items as separate components.`,
    },
    ans: 2,
  },
  {
    type: "bool",
    ques: `
Is the following paragraph correct?

With array destructuring, you are free to give any variable name to the items that you destructure from an array. Contrary to that, when destructuring objects, you have to destructure a property of an object using that exact property's name as the name of the destructured variable.`,
    ans: true,
  },
  {
    type: "mcq",
    ques: `The useEffect hook is a way to:`,
    options: {
      1: `handle a side effect. `,
      2: `handle visual effects (animations and transitions) in React`,
      3: `handle one-way data flows `,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: `Which answer is correct about the following code snippet?
    useEffect( () => {
      if (data !== '') {
        setData('test data')
      }
    })
    `,
    options: {
      1: `This code is ok, except the fact that you should replace the if statement with a ternary operator.`,
      2: `This code is breaking the rules of hooks`,
      3: `This code is not breaking the rules of hooks`,
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: `Choose an example of a side-effect with which you’d need to use a useEffect hook:`,
    options: {
      1: `Update the value of the state variable in a child component.`,
      2: `Run a Fetch API call in React. `,
      3: `Render some prop values on the screen.`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `
        Complete the sentence:

        The useState hook starts with an initial state, but...`,
    options: {
      1: `the useReducer hook gets a reducer function in addition to the initial state. `,
      2: `the useReducer hook cannot be used to track the state at all.`,
      3: `the userReducer hook must be used when the initial state is an object.`,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: `True or false: useRef is a custom hook in React`,
    ans: false,
  },
  {
    type: "mcq",
    ques: `JavaScript is a single-threaded language, meaning...`,
    options: {
      1: `...you can use it with React only when this single thread is used with the useEffect hook.`,
      2: `...you can use it with React only when this single thread is passed to the useState variable. `,
      3: `...it can only do a single thing at any given time.`,
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: `The useEffect hook is a way to:`,
    options: {
      1: ``,
      2: ``,
      3: ``,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: `Which statement is correct about the following code snippet:
    import { useEffect } from "react";

      function useConsoleLog(varName) {
        useEffect(() => {
          console.log(varName);
        });
      }

      export default useConsoleLog;
      
      Choose the correct statement below.
    `,
    options: {
      1: `This code is an example of an explicit state-updating function.`,
      2: `This is an example of a custom hook.`,
      3: `This code is an example of an implicit state-updating function.`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `
Find the error in this code:
import {useState} from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    useRestaurantName("Little Lemon");
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update restaurant name
      </button>
    </div>
  );
};
`,
    options: {
      1: `The state-setting function's variable name in the array destructuring should not be setRestaurantName. `,
      2: `The onClick event should not be this: onClick={updateRestaurantName}`,
      3: `The code inside the updateRestaurantName() function definition should not invoke useRestaurantName("Little Lemon")`,
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: `Which of the examples below are valid types for Elements? Select all that apply. (where DeleteButton is react component)`,
    options: {
      1: `type: <div />`,
      2: `type: div`,
      3: `type: button`,
      4: `type: DeleteButton`,
    },
    ans: [2, 3, 4],
  },
  {
    type: "mcq",
    ques: `Which of the statements below clearly states the definitions of Containment and Specialization? Select all that apply. `,
    options: {
      1: `Containment refers to the fact that some components don’t know their children ahead of time`,
      2: `Specialization defines components as being “unique” from all other components.`,
      3: `Specialization defines components as being “special cases” of other components.`,
    },
    ans: [1, 3],
  },
  {
    type: "mcq",
    ques: `Which of the following operations does the React.cloneElementAPI enable a parent to perform? Select all that apply.`,
    options: {
      1: `Transform React props directly `,
      2: `Add to children properties`,
      3: `Extend the functionality of children components`,
      4: `Modify children properties`,
    },
    ans: [2, 3, 4],
  },
  {
    type: "mcq",
    ques: `Assume: In the RadioGroup component, when cloning each child element (RadioOption), what’s the condition that determines the value of the new checked prop that gets merged into the existing props of each RadioOption component? Know that the RadioGroup component has three props - onChange, selected and children - and that each RadioOption component receives two props - value and children.

`,
    options: {
      1: `React.cloneElement(child, {
  onChange,
  checked: child.checked === true,
});`,
      2: `React.cloneElement(child, {
  onChange,
  checked: child.props.value === selected,
});`,
      3: `React.cloneElement(child, {
  onChange,
  checked: child.props.selected,
});`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `Inside the RadioOption component, what should be the value of the onChange prop from the radio input element? Recall that the RadioOption component receives four props - value, checked, onChange and children.`,
    options: {
      1: `<input type="radio" onChange={() => onChange(props.value)}`,
      2: `<input type="radio" onChange={e => onChange(e.target.value)} />`,
      3: `<input type="radio" onChange={props.onChange} /> `,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `Question 3
What are the arguments that the React.Children.map function receives?`,
    options: {
      1: `The first argument is the children prop, and there is no second argument.`,
      2: `The first argument is the children prop, and the second argument is a transformation function that returns a new React element.`,
      3: `The first argument is the children prop, and the second argument is a predicate function that returns a boolean.`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `A simple welcome screen for restaurant has been built, where users are able to sign up or login, depending on whether they have an account or not. The App component renders two buttons and uses the Button component for the sign up and the LoginButton component for log in.  

Both buttons make use of the onClick handler, to show an alert about the intended action when they are pressed. 

The same alert message that has been provided for Sign up, is used on the LoginButton component, hence overriding the onClick handler that the LoginButton already defines internally. 

What would the message of the alert be when the Sign up button is clicked? `,
    options: {
      1: `Signing up`,
      2: `Logging in`,
      3: `Depends on order of spread operator or props`,
      4: `Defining same prop is invalid`,
    },
    ans: [3, 4],
  },
  {
    type: "mcq",
    ques: `Let’s suppose you have the below JSX that gets returned from a component, what would be the equivalent object representation (Element) that React will create internally?
     <button className='button-primary'>
      <div>
          Submit
      </div>
    </button>
    `,
    options: {
      1: ` {
    type: Button,
    props: {
        className: "button-primary",
        children: "div",
    },
}`,
      2: `{
    type: "button",
    props: {
        className: "button-primary",
        children: {
            type: "div",
            props: {
                children: "Submit",
            } 
        },
    },
}`,
      3: `{
    type: "button",
    props: {
        className: "button-primary",
        children: {
            type: "div",
            children: "Submit"
        },
    },
}`,
    },
    ans: 2,
  },
  {
    type: "mcq",
    ques: `What is the concept of component specialization?`,
    options: {
      1: `A component defined as a special case of another more generic component. `,
      2: `A component that is designed to fulfill one specific purpose and nothing else.`,
      3: `A component that doesn’t know its children ahead of time and acts as a generic box.`,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: `You would like to clone a React element by using the React.cloneElement API, where the particular element has the below structure:
    const buttonElement = {
          type: SubmitButton,
          props: {
            color: "green",
            children: "Submit!",
          },
    };
    What would be the value of the variable output when using the API with the following parameters?
    const output = React.cloneElement(buttonElement, {disabled: true, color: “blue” });
    `,
    options: {
      1: `const output = React.cloneElement(buttonElement, {disabled: true, color: “blue” });`,
      2: `{
  type: SubmitButton,
  props: {
    disabled: true,
    color: "blue",
  },
};`,
      3: `{
  type: SubmitButton,
  props: {
    color: "green",
    children: "Submit!",
    disabled: true,
  },
};`,
    },
    ans: 1,
  },
  {
    type: "mcq",
    ques: `Imagine you are using the spread operator in the below component as follows:
    const props = { title: "tiramisu", cal: 400 };
    const element = <Component title="cake" {...props} cal={500} />;
    What would be the value of element.props?`,
    options: {
      1: `{ title: "tiramisu", cal: 400 } `,
      2: `{ title: "cake", cal: 400 }`,
      3: `{ title: "tiramisu", cal: 500 }`,
    },
    ans: 3,
  },
  {
    type: "mcq",
    ques: `Amongst the below expressions, select all that will not render anything on the screen when being used in JSX.`,
    options: {
      1: `<div>{false}</div>`,
      2: `<div>{null}</div>`,
      3: `<div>{(() => true)()}</div>`,
      4: `<div>{undefined}</div>`,
    },
    ans: [1, 2, 3, 4],
  },
  {
    type: "mcq",
    ques: ``,
    options: {
      1: ``,
      2: ``,
      3: ``,
    },
    ans: 1,
  },
  {
    type: "bool",
    ques: ``,
    ans: true,
  },
  {
    type: "bool",
    ques: ``,
    ans: true,
  },
  {
    type: "bool",
    ques: ``,
    ans: true,
  },
];
