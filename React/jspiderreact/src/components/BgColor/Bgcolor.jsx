import React from "react";
import { useState } from "react";

const Bgcolor = () => {
  let [color, setColor] = useState("pink");
  return (
    <div style={{ Bgcolor: color }}>
      <div>
        <div>
          <button onClick={() => setColor("red")}>Red</button>
        </div>
      </div>
    </div>
  );
};

export default Bgcolor;
