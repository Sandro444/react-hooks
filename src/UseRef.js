import React, { useRef, useEffect, useState } from "react"

export const UseRef = () => {
    const inputRef = useRef()
    const [c, setC] = useState(0)
    console.log("renders", c)
    //{inputRef.current && inputRef.current.focus()}
    useEffect(() => inputRef.current.focus(),[])
    return (
        <>
            <h1>useRef</h1>
            <button onClick={e=>setC(c+1)}>inc</button>
            <input ref={inputRef}></input>
        </>
    )
}