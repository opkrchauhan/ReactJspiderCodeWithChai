import React from "react";

const UseStateEx4 = () => {
  let [state, setState] = useState("red");

  return (
    <>
      <h1>Hello Pappu</h1>
      <div style={{ width: "300px", height: "300px", bg: "white" }}>
        <button
          onClick={() => {
            setState("white");
          }}
        >
          black
        </button>
      </div>
    </>
  );
};

export default UseStateEx4;
