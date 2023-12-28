import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClear = () => setCount(0);

  return (
    <div>
      <div className="CounterContainer">
        <p className="CounterText">{count}</p>
        <div className="ButtonContainer">
          <button onClick={handleIncrement} className="ButtonIncrease">
            +
          </button>
          <button onClick={handleClear} className="ButtonClear">
            clear
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
