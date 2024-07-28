import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const upClick = () => {
    console.log("upClick");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const loClick = () => {
    console.log("upClick");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const greetClick = () => {
    console.log("upClick");
    let newText = text.concat(" Hello  User");
    setText(newText);
  };

  const handelOnChange = (event) => {
    console.log("handelOnChange");

    setText(event.target.value);
  };
  const clear = () => {
    setText("");
  };

  const handelExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const handelCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <div className={`bg-${props.mode}`}> 
      <div className=" container mb-3 mt-5 p-4 ">
        <div className="row">
          <div className={`col text-${props.textMode}`}>
            <h1>{props.heading} </h1>
          </div>
          <div className="col">
            {" "}
            <button
              className="btn btn-outline-secondary w-100"
              onClick={handelCopy}
            >
              COPY
            </button>
          </div>
        </div>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handelOnChange}
          placeholder="Enter text..."
        ></textarea>
        <div className="buttons row mt-4  ">
          <div className="col ">
            {" "}
            <button className="btn btn-outline-primary w-100" onClick={upClick}>
              Convert to UPPERCASE
            </button>
          </div>
          <div className="col">
            {" "}
            <button className="btn btn-outline-primary w-100" onClick={loClick}>
              Convert to lowercase
            </button>
          </div>
          <div className="col">
            {" "}
            <button
              className="btn btn-outline-primary w-100"
              onClick={greetClick}
            >
              Greet at End
            </button>
          </div>
          <div className="col">
            {" "}
            <button
              className="btn btn-outline-primary w-100"
              onClick={handelExtraSpaces}
            >
              Remove Extra space
            </button>
          </div>
          <div className="col">
            {" "}
            <button className="btn btn-outline-danger w-100" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className={`container bg-${props.mode}`}>
        <h2 className={`text-center text-${props.textMode}`}>Your Text Summery</h2>
        <p className={`text-${props.textMode}`}>
          your text have {text.split(" ").length - 1} words and {text.length}
          characters
        </p>
        <p className={`text-${props.textMode}`}>{text.split(" ").length * 0.008} Minutes to read.</p>
        <h2 className={`text-center text-${props.textMode}`}>Preview</h2>
        <p className={`text-${props.textMode}`}>{text.length>0?text : "Enter something to preview here"}</p>
      </div>
    </div>
  );
}
