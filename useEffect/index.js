// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

// Let's use a timer as an example.

// Example:Get your own React.js Server
// Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

{/* But wait!! It keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

Example
1. No dependency passed: */}

useEffect(() => {
  //Runs on every render
});
{/* Example
2. An empty array: */}

useEffect(() => {
  //Runs only on the first render
}, []);
{/* Example
3. Props or state values: */}

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
{/* So, to fix this issue, let's only run this effect on the initial render. */}