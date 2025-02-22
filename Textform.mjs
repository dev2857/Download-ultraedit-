import React, { useState } from 'react'
import PropsTypes from 'prop-types'


export default function Textform(props) {
    const Handleonclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been capitalize.","success")
    }
    const Handleonchange = (event) => {
        setText(event.target.value)
    }
    const Handleclear = () => {
        setText("")
        props.showAlert("Text has been Cleared!.","danger")
    }
    const Handlecopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text was copied ! Paste it anywhere!!!","success")
    }
  
         const [text, setText] = useState('')
    return (
        <>
            <h1 className={`mx-3  text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                Enter a text :
            </h1>

            <div className="mb-3 mx-3">
                <textarea style={{backgroundColor : props.mode === 'light' ? 'white' : 'black', color : props.mode === 'light' ? 'black' : 'white'}} className={`form-control`}  value={text} onChange={Handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={Handleonclick} className='mx-2' style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Change To Uppper Case</button>
            <button onClick={Handleclear} className='mx-1' style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Clear</button>
            <button onClick={Handlecopy} className='mx-1' style={{ backgroundColor: 'green', color: 'white', border: 'none' }}>Copy</button>

            <h2  className={` mx-3 my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                Analysing Text :
            </h2>
            <p className={`mx-3  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                {text.split(" ").length} words And {text.length} characters
            </p>
            <p className={`mx-3  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                {0.08 * text.split(" ").length} minutes for Reading...
            </p>
            <h2 className={`mx-3 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                Preview :
            </h2>
            <p className={`mx-3 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                {text}
            </p>
        </>
    )
}

Textform.PropsTypes = {
    title: PropsTypes.string.isRequired,
}
