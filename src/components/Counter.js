import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(value => value - 1);
  const increment = () => setCount(value => value + 1);
  return (
    <div>
      <p>Counter value: {count}</p>
      {/* <p data-testid="counter-label">Counter value: {count}</p> */}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;