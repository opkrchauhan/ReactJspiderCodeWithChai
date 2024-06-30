import React, { useState } from "react";

const UseStateEx3 = () => {
  let [state, setState] = useState("Tinku");
  // console.log(state);
  // console.log(setState);
  // let increment = () => {
  //   setState(state + 1);
  // };

  let changeName = () => {
    setState("Amar");
  };
  return (
    <div>
      <p> {state}</p>
      <br></br>
      <button onClick={changeName}>Bye</button>
    </div>
  );
};

export default UseStateEx3;
