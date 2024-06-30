import React from "react";
import JsxExpression from "./components/UseStateHook/JsxExpression.jsx";
import CountIncrement from "./components/UseStateHook/UseStateEx2.jsx";
import UseStateIntro from "./components/UseStateHook/UseStateIntro.jsx";
import ClassBasedIntro from "./components/ClassBasedComp/ClassBasedIntro.jsx";
import Bgcolor from "./components/BgColor/Bgcolor.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Bgcolor />
      {/* <JsxExpression /> */}
      {/* <UseStateIntro /> */}
      <div>{/* <CountIncrement /> */}</div>
      {/* <ClassBasedIntro /> */}
    </>
  );
}

export default App;
