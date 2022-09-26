import React, { useState } from 'react'
import "./digitalClock.css"

function Digitalclock() {

    const [timer, setTimer] = useState();
    
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setTimer(time)
        console.log(time)
    }, 1001)

    return (
        <div className='main'>
            <p>{timer}</p>
        </div>
    )
}

export default Digitalclock
