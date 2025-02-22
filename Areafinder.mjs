import React, { useState } from 'react'
export default function Areafinder() {
    const [text, setText] = useState(0);
    const [number,setNumber]=useState(0);
    const Changeit=(event)=>{
        setText(event.target.value);
        // setNumber(3.14*text*text);
    }
    const Click=()=>{
        setNumber(3.14*text*text);
        
    }
  return (
    <>
    <h2 style={{color : 'red'}}>
        Area Of Circle :
    </h2>
    <div className="input">
        Enter a radius :
    </div>
    <textarea value={text} onChange={Changeit}/>
    {/* <div className="output">
        Area of this trangle is {number};
    </div> */}
    <button onClick={Click}>Find!</button>
    <div className="number">
        Area Is {number}
    </div>
    </>
  )
}
