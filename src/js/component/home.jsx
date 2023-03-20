import React, { useState, useEffect } from "react";
import "../../styles/index.css"

//include images into your bundle

//create your first component
const Click = () => {
  const [color, setColor] = useState("")

  useEffect(() => { console.log(color) }, [color])

  return (<>
    <h1>Traffic Light</h1>
    <div className="ligths">
      <div className={"rounded-circle " + `red-light` + `${color === "rounded-circle red-light" ? " red-light-active" : ""}`} onClick={(e) => { setColor(e.target.className) }}></div>
      <br />
      <div className={"rounded-circle " + `yellow-light` + `${color === "rounded-circle yellow-light" ? " yellow-light-active" : ""}`} onClick={(e) => { setColor(e.target.className) }}></div>
      <br />
      <div className={"rounded-circle " + `green-light` + `${color === "rounded-circle green-light" ? " green-light-active" : ""}`} onClick={(e) => { setColor(e.target.className) }}></div>
    </div>
  </>

  );
};

export default Click;