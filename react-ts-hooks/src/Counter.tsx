import { ReactNode } from 'react';
import { useCounter } from './context/CounterContext';
import { useCounterText } from './context/CounterContext';

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <>
      <h2>{children(count)}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <h2 />
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  );
};
