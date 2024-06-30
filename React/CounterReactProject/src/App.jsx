import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () => {
    // if (counter == 20) {
    //   counter = 20;
    // } else {
    //   counter = counter + 1;
    // }

    // This can increase value only 1 time
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    //This is used to increment value by 4
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter == 0) {
      counter = 0;
    } else {
      counter = counter - 1;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>IncreaseValue {counter}</button>
      <br />
      <button onClick={removeValue}>DecreaseValue {counter}</button>
      <p>footer :{counter}</p>
    </>
  );
}

export default App;
