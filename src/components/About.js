import React, { useState } from "react";
// import LightDarkButton from './LightDarkButton';

export default function About() {
  // let values = "🌙";
  // let myStyle = {
  //   color : 'red',
  //   backgroundColor : 'yellow'
  // };

  const [myStyle, setMystyle] = useState({
    color: "white",
    backgroundClolor: "black",
  });

const [btnText, setBtnText] = useState("Enable dark theme");

  const toggleStyle = () => {
    // eslint-disable-next-line eqeqeq
    if (myStyle.color === "white") {
      setMystyle({
        color: "black",
        backgroundClolor: "white",
      });
      setBtnText("Enable Light theme");
    }
    else{
      setMystyle({
        color: "white",
        backgroundClolor: "black",
      });
      setBtnText("Enable Dark theme");
    }
  };

  return (
    <div className="container" >
      <div className="alert alert-secondary text-center mt-5 " style={myStyle} role="alert">
        ABOUT US
      </div>

      <div
        className="alert alert-success text-center mt-4  "
        style={myStyle}
        role="alert"
      >
        <p>MANDAR KELKAR </p>
        <p>Studies in Vishwakarma University </p>
        <p>BTech in computer engineering </p>
      </div>

      <button className="btn btn-outline-dark" onClick={toggleStyle}>{btnText}</button>
    </div>
  );
}
