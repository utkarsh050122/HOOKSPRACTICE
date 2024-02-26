import React, { useState, useCallback } from 'react';

const IncrementButton = React.memo(({ onIncrement }) => {
  console.log('Button rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <div>Count: {count}</div>
      <IncrementButton onIncrement={increment} />
    </div>
  );
};

export default Counter;
