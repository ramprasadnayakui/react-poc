import React, { useState } from 'react';

export default function closureExa() {
  const [args1, setArgs1] = useState([]);
  const [result1, setResult1] = useState();
  const [args2, setArgs2] = useState([]);
  const [result2, setResult2] = useState();

  function showMethod1(e) {
    setArgs1((args1) => [...args1, e.target.value]);
  }
  function appendInput1() {}

  function showMethod2(e) {}
  function appendInput2() {}

  return (
    <div>
      <div>
        <input type="number" onChange={showMethod1} />
        <input type="number" onChange={showMethod1} />
        <button type="warning" onClick={appendInput1}>
          Add More Args
        </button>
        <p>add({args1.join(',')})</p>
        <span> = {result1}</span>
      </div>
      <br />
      <div>
        <input type="number" onChange={showMethod2} />
        <input type="number" onChange={showMethod2} />
        <button type="warning" onClick={appendInput2}>
          Add More Args
        </button>
        <p>add({args2.join(',')})</p>
        <span> = {result2}</span>
      </div>
    </div>
  );
}
