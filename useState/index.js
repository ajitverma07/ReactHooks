// React useState Hook
// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.

// Import useState
// To use the useState Hook, we first need to import it into our component.

// Example:Get your own React.js Server
// At the top of your component, import the useState Hook.

import { useState } from "react";
// Notice that we are destructuring useState from react as it is a named export.

// To learn more about destructuring, check out the ES6 section.

// Initialize useState
// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.
// Example:
// Initialize state at the top of the function component.

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
// Notice that again, we are destructuring the returned values from useState.

// The first value, color, is our current state.

// The second value, setColor, is the function that is used to update our state.

// These names are variables that can be named anything you would like.

// Lastly, we set the initial state to an empty string: useState("")


// Read State
// We can now include our state anywhere in our component.

// Example:
// Use the state variable in the rendered component.

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);