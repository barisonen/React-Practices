import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {
  const [transitionAmount, setTransitionAmount] = useState<number>(0);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className='App'>
      <h1>You have: {amount}$</h1>
      <input type="number" onChange={(e) => setTransitionAmount(e.target.valueAsNumber)}></input>
      <br/>
      <button onClick={() => depositMoney(transitionAmount)}>Deposit</button>
      <button onClick={() => withdrawMoney(transitionAmount)}>Withdraw</button>
      <br/>
      <br/>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
