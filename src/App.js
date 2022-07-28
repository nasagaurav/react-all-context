import React, { useState, useContext, createContext } from 'react';

const CounterContext = createContext();

export default function App() {
  const [x, setx] = useState(0);
  const value = {
    x,
    setx,
  };
  return (
    <CounterContext.Provider value={value}>
      <Increment />
      <Decrement />
      <Zero />
      <Thousand />
      <TwoThousand />
    </CounterContext.Provider>
  );
}

const Increment = () => {
  const data = useContext(CounterContext);
  // console.log(data);
  const p1 = () => {
    data.setx(data.x + 1);
  };
  return (
    <div>
      <h3 onClick={p1}>Increment component : {data.x}</h3>
    </div>
  );
};
const Decrement = () => {
  const data = useContext(CounterContext);
  const { x, setx } = data;
  const p1 = () => setx(x - 1);
  return (
    <div>
      <h3 onClick={p1}>Decrement component :{x} </h3>
    </div>
  );
};
const Zero = () => {
  const data = useContext(CounterContext);
  const { x, setx } = data;
  const p1 = () => setx(0);
  return (
    <div>
      <h3 onClick={p1}>Zero component : {x}</h3>
    </div>
  );
};
const Thousand = () => {
  const data = useContext(CounterContext);
  const { x, setx } = data;
  const p1 = () => setx(1000);
  return (
    <div>
      <h3 onClick={p1}>Thousand component :{x} </h3>
    </div>
  );
};
const TwoThousand = () => {
  const data = useContext(CounterContext);
  const { x, setx } = data;
  const p1 = () => setx(2000);
  return (
    <div>
      <h3 onClick={p1}>TwoThousand component :{x} </h3>
    </div>
  );
};
