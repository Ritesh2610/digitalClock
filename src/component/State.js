import React, { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0);

   const increment=()=>{
        setCount(count + 1)
    }
 const   decrement=()=>{
        setCount(count - 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default State