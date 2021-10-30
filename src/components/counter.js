import React, {useState, useEffect} from "react"
import { Button } from 'react-bootstrap';
import "./startCounter.css";

import {increment, decrement} from "../actions/actionTypes"
import {connect} from 'react-redux'

function Counter(props){
  const [count, setCount] = useState(props.count);

  return(
    <div className="Timer">
      <div className="lander">
        <Button className="startCount" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
        <h1> {count} </h1>
        <Button className="stopCount" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
      </div>
   </div>
  )
}

const mapStateToProps= (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(Counter)




