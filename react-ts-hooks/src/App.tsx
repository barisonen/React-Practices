import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { CounterProvider, initState } from './context/CounterContext';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [user, setUser] = useState<User | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('mounting');
    console.log('User: ', user);

    return () => console.log('unmounting');
  }, [user]);

  const setAUser = useCallback((): void => setUser({ id: 1, username: 'Baris' } as User), []);

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <button onClick={setAUser}>Set A User</button>
      <h2>
        {user ? (
          <>
            {user.id} - {user.username}
          </>
        ) : (
          <></>
        )}
      </h2>
      <h2>Fibonacci of 37: {result}</h2>
      <input ref={inputRef} type="text"></input>
      <h2>Input ref: {inputRef?.current?.value}</h2>
      <h6>Set a User to refresh the state to see the input ref</h6>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
