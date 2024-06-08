import React, {useState} from 'react'

export default function Textform(props) {
    const[text, setText] = useState('');
    const uppercase = ()=>{
        // console.log('Uppercase wass clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const lowercase = ()=>{
        // console.log('Uppercase wass clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleonchange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
        <div>
            <h1>{props.Heading}</h1>            
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text} onChange={handleonchange} rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={uppercase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lowercase}>Convert to lowercase</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} letters</p>
            <p> {0.008 * 60 * text.split(" ").length} Seconds to read the text</p>
            <h2>Written text - </h2>
            <p>{text}</p>
        </div>
        </>
    )
}

