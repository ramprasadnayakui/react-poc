import React, {useState, useEffect} from "react"
import { Button } from 'react-bootstrap';
import "./Timer.css";

export default function Timer(){
  const [currentCount, setCount] = useState(0);

  function startCount(){
    var interval = setInterval(() => {setCount(currentCount+1) }, 1000);
  }

  return(
    <div className="Timer">
      <div className="lander">
        <Button onClick={startCount}>Start timer</Button>
        <h4>Current time: {currentCount}</h4>
        <Button >Stop timer</Button>
      </div>
   </div>
  )
  
}