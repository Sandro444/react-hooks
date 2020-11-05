import React, { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import { UseCB } from "./UseCB";
import  { UseState} from "./UseState"
import {UseRef} from "./UseRef"
let rend = 0;
function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])

rend +=1
  const fetcher = useCallback(async (query) => {
    console.log("i got recreated")
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${query}`,
    )
    setData(result.data.hits)
  },[query])
  useEffect(() => {
    fetcher(query)
  } ,[fetcher])
  console.log(rend)



  return (
    <div className="App">
      <UseRef />
      <UseState /> 
      <UseCB />
      <h1>useEffect</h1>

      query: <input value={query} onChange={e=>setQuery(e.target.value)} />
      {
        data? data.map((d,i) => {
          return (
            <li key={d.created_at}> {d.title} </li>
          )
        }): null
      }
    </div>
  );
}

export default App;