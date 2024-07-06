import "./App.css";
import { Theme } from "./components/ThemeToggle";
import Body from "./Body";
import UseStateHook from "./hooks/UseState";
import EffectHook from "./hooks/UseEffect";
import MyComponent from "./client-api/createPortal";
import ListItem from "./manipulateChildren/children";
import List from "./manipulateChildren/List";
import { products } from "./manipulateChildren/data";
import Row from "./manipulateChildren/Row";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import BasicUsage from "./components/modal/modal";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <>
      {/* <List
        items={products}
        renderItem={(product, isHighlighted) => (
          <Row
            key={product.id}
            title={product.title}
            isHighlighted={isHighlighted}
          />
        )}
      /> */}
      <List>
        {products.map((pro) => (
          <Row key={pro.id} title={pro.title} />
        ))}
      </List>
      {/* <ChakraBaseProvider theme={theme}>
        <BasicUsage />
      </ChakraBaseProvider> */}
      <Theme>
        <Body />
      </Theme>
      <UseStateHook />
      <EffectHook />
      <MyComponent />
      {/* <ListItem>
        <p>{1}</p>
        <p>{true}</p>
        <div>
          <p>shubham</p>
          <p>frontend engineer</p>
        </div>
        <p>{undefined}</p>
        <p>{null}</p>1 'shubham'
        {true}
        {null}
        {undefined}
        {1}
        <></>
        []
        {shubham} // error
        <p>{c}</p>// error
      </ListItem> */}
    </>
  );
}

export default App;
