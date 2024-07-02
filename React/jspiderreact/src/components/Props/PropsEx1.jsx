import React from "react";
import PropsEx1Child from "./PropsEx1Child";

const PropsEx1 = () => {
  let a = 10;
  let func = () => {
    console.log("func executed");
  };
  return (
    <div>
      <PropsEx1Child fun={{ func, a }} />
    </div>
  );
};

export default PropsEx1;
