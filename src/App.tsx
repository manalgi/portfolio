import { Button } from "@mui/material"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return <Button onClick={()=>setCount(prev=>prev+1)}>
    {count}
  </Button>
}

export default App
