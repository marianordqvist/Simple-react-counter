import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      <div className="CounterContainer">
        <p className="CounterText">{count}</p>
        <div className="ButtonContainer">
          <button onClick={handleIncrement} className="ButtonIncrease">
            +
          </button>
          <button onClick={handleDecrement} className="ButtonDecrease">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
