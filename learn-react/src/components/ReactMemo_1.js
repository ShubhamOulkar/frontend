import { memo, useState } from "react";

export default function MyApp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

// Following component re-renders on address state change as well as on name.
// function Greeting({ name }) {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//   const [greeting, setGreeting] = useState("Hello");
//   return (
//     <>
//       <h3>
//         {greeting}
//         {name && ", "}
//         {name}!
//       </h3>
//       <GreetingSelector value={greeting} onChange={setGreeting} />
//     </>
//   );
// }

// Following function only re-render on name state change in parent
// Also it re-renders on it's own state greeting change.
const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState("Hello");
  return (
    <>
      <h3>
        {greeting}
        {name && ", "}
        {name}!
      </h3>
      <GreetingSelector value={greeting} onChange={setGreeting} />
    </>
  );
});

function GreetingSelector({ value, onChange }) {
  return (
    <>
      <label>
        <input
          type="radio"
          checked={value === "Hello"}
          onChange={(e) => onChange("Hello")}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={value === "Hello and welcome"}
          onChange={(e) => onChange("Hello and welcome")}
        />
        Enthusiastic greeting
      </label>
    </>
  );
}
