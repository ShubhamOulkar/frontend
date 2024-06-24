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
    type: "bool",
    ques: "",
    ans: true,
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
];
