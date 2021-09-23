import React, {useState, useEffect} from "react"
import { Button } from 'react-bootstrap';
import "./Timer.css";

export default function Timer(){
  const [currentTime, setTime] = useState(new Date().toLocaleString());

  return(
    <div className="Timer">
    <div className="lander">
      <Button>Start timer</Button>
        <h4>Current time: {currentTime}</h4>
        <Button >Stop timer</Button>
    </div>
  </div>
  )
  
}