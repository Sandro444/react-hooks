import React, { useCallback, useState, memo, useMemo } from "react"
export const UseCB = memo(() => {
    const [count, setCount] = useState(0)
    const list = useMemo(()=>[1,2,3,3,4,4,5,1,3], [])
    
    const memoList = useMemo(() => {
        const filterList = list.filter((l,i) => {
            if(i%2==0)return l
        })
        console.log("memoList got fired")
        return filterList
    } , [list])
    return (<>
        <h1>useCallback</h1>
        {memoList.map((m,i)=><li key={i}> {m} </li>)}
        <Value count={count} />
        <button onClick={() => setCount(count + 1)}>inc</button>
        <AnotherVal val={"value"} />
        <Counter />
    </>
    )
})

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [rerender, setToRerender] = useState(0);
    const setCount1 = useMemo(() => () => {
        console.log("clicked")
        console.log(count)
        setCount(c => c + 1)
    },[])

    const setCount2 = useCallback(() => {
        console.log(secondCount)
        setSecondCount(c => c + 1)
    },[])

    const toRerender = (e) => {
        setToRerender(r => r + 1)
    }

    return (
        <div>
            <button onClick={toRerender}>rerender {rerender}</button>
            <Count count = {count} setCount={setCount1} />
            <Count count = {secondCount} setCount={setCount2} />
        </div>
    )
}

const Count = memo(({count, setCount}) => {
    console.log("count rendered")
    return <div>
        count: {count} <button onClick={setCount}>inc</button>
    </div>
})

const Value = ({ count }) => {
    console.log("value rerendered")
    return (
        <h1>{count}</h1>
        
    )
}

const AnotherVal = memo(({ val }) => {
    console.log("av rerendered")
    return (
        <h1> {val} </h1>
    )
})