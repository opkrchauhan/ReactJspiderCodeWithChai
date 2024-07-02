import React, { useState } from "react";

import PropsEx2Child from "./PropsEx2Child";
const PropsEx2 = () => {
  const [state, setState] = useState(0);

  function increment() {
    setState(state + 1);
  }
  return (
    <div>
      <PropsEx2Child props={{ state, increment, setState }} />
    </div>
  );
};

export default PropsEx2;
