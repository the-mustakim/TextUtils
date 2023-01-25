//Shortcut for bolier plate code of react functinal based component: rfc

import React, { useState } from "react";

//{useState} : useState Hooks helps us to create the state variable

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Cliked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text to Upper Case","Success")
  };

  const handleLowClick = () => {
    let newTask = text.toLowerCase();
    setText(newTask);
    props.showAlert("Text to Lower Case","Success")
  };

  const handleClear = () => {
    let newTask = "";
    setText(newTask);
    props.showAlert("Cleared","Success")
  };

  const handleInvertCase = () => {
    let newText = "";
    for (let i in text) {
      //debugger;
      //console.log("Before"+newText);
      //console.log(text[i])
      if (text[i] === text[i].toLowerCase()) {
        //newText.concat(text[i].toUpperCase());
        console.log(text[i]);
        newText = newText + text[i].toUpperCase();
        //debugger;
      } else {
        //console.log(text[i].toLowerCase())
        newText = newText + text[i].toLowerCase();
      }
      
    }
    console.log(newText);
    setText(newText);
    props.showAlert("Invert Text","Success")
  };

  const handleCopy = () => {
    console.log("I am Copy");
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","Success")
  };

  // const handleExtraSpace=()=>{
  //     let
  // }

  //Event Handler For ONCHANGE: Set Ki gai Value ko change karna is an event so, we have to handle that event
  //But, event.target: The target event property returns the element that triggered the event
  // event.target.value: The Value of that element that triggred the event
  //Agar ham ye event.target.value setText nahi karenge to ham existing value ko change ya phir remove nahi kar payenge

  const handleOnChange = (event) => {
    //console.log("Handle On Change")
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the Text Here");

  //text="Nothing"  //Wrong way of updating the text
  //setText("Enter the Wrong Text Here")  //Correct Way of Updating

  return (
    <>
      <h1 className="mb-4" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="form-group">
          <textarea
            className="form-control"
            style={{ background: props.mode === 'dark' ? '#23282f' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"></textarea>
        </div>
        <br/>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInvertCase}>
          Convert to InvertCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        {/*<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>*/}
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text Summary</h1>
        <p>
          {" "}
          {text.split(/\s+/).filter((ele=>{return ele.length!=0})).length} Words and {text.length} Charectars
        </p>
        <p>{0.008 * text.split(" ").filter((ele=>{return ele.length!=0})).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
