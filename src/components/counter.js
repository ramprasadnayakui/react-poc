import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './startCounter.css';

import { increment, decrement } from '../actions/counterAction';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div className="Timer">
      <div className="lander">
        <Button className="startCount" onClick={() => props.increment()}>+</Button>
        <h1> {props.count} </h1>
        <Button className="stopCount" onClick={() => props.decrement()}>-</Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
