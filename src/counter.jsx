import { useEffect, useState } from "react"

function Counter() {
const [count, setCount] = useState(0);

useEffect(()=>{
  console.log("rendered")
})

function incress(){
  setCount(count+1)
}


  return (
    <div>
      <p>{count}</p>
      <button onClick={incress}>Increase</button>
    </div>
  )
}

export default Counter
