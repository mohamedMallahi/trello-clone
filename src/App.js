import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Trello Clone</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </div>
  );
}
