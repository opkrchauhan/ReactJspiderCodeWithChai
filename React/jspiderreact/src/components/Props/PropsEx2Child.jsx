import React from "react";

const PropsEx2Child = (props) => {
  return (
    <div>
      <h1>Count : {props.props.state}</h1>
      <button
        style={{ background: "red", borderRadius: "2px" }}
        onClick={() => {
          props.props.increment();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default PropsEx2Child;
