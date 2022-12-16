import React from 'react'
import { useState } from 'react';




export default function TextForm(props) {

    const[text, setText] = useState('');
    const handleUpClick = ()=>{
        let tempText = text.toUpperCase();
        setText(tempText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleDownClick = ()=>{
        let tempText = text.toLowerCase();
        setText(tempText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleToggleClick = ()=>{
        let tempText = text;
        if(tempText.toLowerCase()===true){
            tempText = text.toUpperCase();
            setText(tempText);
            props.showAlert("Converted to Upper Case", "success");
            
        }else{
            tempText = text.toLowerCase();
            setText(tempText);
            props.showAlert("Converted to Lower Case", "success");
        }
        
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text has been cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        console.log("onchange");
    }

    // bg-${props.mode} 
    return (
    <div className={`container-fluid text-${props.mode==='light'?'dark':'light'}'} textForm`}>
        <div className={`mb-3 my-3 container  text-${props.mode==='light'?'dark':'light'}`}>
            <h2 className='mb-3'>{props.text}</h2>
            <textarea className="form-control my-8" id="myBox" rows="8" onChange={handleOnChange} >
                {text}
            </textarea>
            <button disabled={text.length===0} className='btn btn-warning my-2 mx-2 btn-lg' onClick={handleDownClick}>lower case</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-2 btn-lg' onClick={handleUpClick}>Upper Case</button>
            <button disabled={text.length===0} className='btn btn-success my-2 mx-2 btn-lg' onClick={handleToggleClick}>ToGgLe CaSe</button>
            <button disabled={text.length===0} className='btn btn-danger my-2 mx-2 btn-lg' onClick={handleClearClick}>Delete All</button>
        </div>

        <div className={`container my-5  text-${props.mode==='light'?'dark':'light'}`}>
        <h4>Your text summary</h4>
            <p>{text.split(" ").filter((element)=>{return element.length!==0 }).length} words, {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes to read</p>
            
            <h1>Preview your text here</h1>
            <p>{text.length>0?text:'Nothing  to preview here'}</p>
            
        </div>
    </div>
  )
}

