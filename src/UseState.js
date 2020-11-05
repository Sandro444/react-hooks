import React, { useEffect, useState } from "react"


export const UseState = () => {
    const [state1, setState1] = useState([0])
    const [state2, setState2] = useState([0])
    const [samestate, setSamestate] = useState([10])
    console.log("____________")
    let let1 = [2];
    let let2 = [0];

    const func1 = () => {
        console.log("func1 rendered")
    }

    const func2 = () => {
        console.log("func2 rendered")
    }

    useEffect(() => {
        console.log("state1 rendered")
    }, [state1])
    useEffect(() => {
        console.log("state2 rendered")
    }, [state2])
    useEffect(() => {
        console.log("let1 rendered")
    }, [let1])
    useEffect(() => {
        console.log("let2 rendered")
    }, [let2])
    useEffect(() => func1(), [func1])
    useEffect(() => func2(), [func2])
    useEffect(() => console.log("state updated to same value"), [samestate])

    return (
        <>
            <h1>useState</h1>
            <ul>
                <li> samestate: {samestate[0]} | <button onClick={e=>setSamestate(state=>state)}>set same state</button> </li>
                <li> state1 : {state1[0]} | <button onClick={e=>setState1(state => [state[0]+1])}> inc state1 </button> </li>
                <li> state2 : {state2[0]} | <button onClick={e=>setState2(state=>[state[0]+1])}> inc state2 </button> </li>
                <li> let1 : {let1[0]} | <button onClick={e=>let1[0]+=1}> inc let1 </button> </li>
                <li> let2 : {let2[0]} | <button onClick={e=>let2[0]+=1}> inc let2 </button> </li>
            </ul>
        </>
    )
}