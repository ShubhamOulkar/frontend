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
    type: "mcq",
    ques: "",
    options: {
      1: "",
      2: "",
      3: "",
    },
    ans: "",
  },
  {
    type: "mcq",
    ques: "",
    options: {
      1: "",
      2: "",
      3: "",
    },
    ans: "",
  },
  {
    type: "mcq",
    ques: "",
    options: {
      1: "",
      2: "",
      3: "",
    },
    ans: "",
  },
  {
    type: "bool",
    ques: "",
    ans: true,
  },
  {
    type: "bool",
    ques: "",
    ans: true,
  },
];
