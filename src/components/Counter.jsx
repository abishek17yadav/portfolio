import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // state for counter

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default App;
