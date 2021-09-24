import React, {useState, useEffect} from "react"
import { Button } from 'react-bootstrap';
import "./Timer.css";

export default function Timer(){
  const [count, setCount] = useState(0);
  const [isPaused, setPause] = useState(true);
  const [intervalId, setIntervalId] = useState(0)

  const startCount = () => {
    var intervalId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    setIntervalId(intervalId);
}

const stopCount = () => {
  clearInterval(intervalId);
}

  return(
    <div className="Timer">
      <div className="lander">
        <Button className="startCount" onClick={startCount}>Start</Button>
        <h4>Current time: {count}</h4>
        <Button className="stopCount" onClick={stopCount}>Stop</Button>
      </div>
   </div>
  )
  
}