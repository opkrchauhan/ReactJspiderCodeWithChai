import React from "react";

const JsxExpression = () => {
  let isUserLogin = true;
  return (
    <div>
      <button>{isUserLogin ? "LogOut" : "Login"}</button>
    </div>
  );
};

export default JsxExpression;
