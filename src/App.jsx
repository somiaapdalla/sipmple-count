import { useState } from "react"

function App() {
  const[count ,setcount]=useState(0)

  const handleadd=()=>{
    setcount(count+1)
  }
  if(count===10){
    alert("you reached 10")
  }
  return (
    
    <div className="bg-blue-300 h-screen text-center">
     <div className="  pt-10 pl-20 pt-64 pb-5 text-white">{count}</div>
    <button className="bg-blue-500 px-10 py-2 mb-10 text-white  ml-20" onClick={handleadd}>click</button>
    </div>
   
     
  )
}

export default App
