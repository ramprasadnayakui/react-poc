import React, {useState, useEffect} from "react"

export default function Header(){
  const [currPage, setCurrPage] = useState("default");

  return(
    <div>
      <div>
        <button onClick={setCurrPage("FC1")}>Function Component 1</button>
      </div>
      <div>
        {
          if currPage=="default"
        }
      </div>
    </div>
  )   
  
}