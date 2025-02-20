import React, { useState } from 'react'

export default function Textform() {
    const Handleonclick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const Handleonchange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here...')
    return (
        <>
        <h1>Enter a text :</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={Handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={Handleonclick}>Change To Uppper Case</button>
        </>
    )
}
