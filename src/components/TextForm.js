import React, { useState} from 'react'
// import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("Uppercase button was clicked");
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Coverted to Upper Case !!","success");
    }

    const handleLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Coverted to Lower Case !!","success");
    }

    const handleCapClick = ()=>{
        let newText = text.split(" ").map((currentValue) =>{
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Coverted to Capitalized Case !!","success");
    }

    const handleClearClick = ()=>{
        let clrText = '';
        setText(clrText);
        props.showAlert("Cleared All !!","success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    // let wordLength;
    // if (text==="") {
    //     wordLength=0;
    // }
    // else{
    //     wordLength=text.split(" ").length;
    // }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={handleCapClick}>Capitalized Case</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Summary</h1>
            <p>{((text.split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read above content</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in text box to preview it"}</p>
        </div>
        </>
    )
}