import React, { createContext, useContext } from 'react';
import './style.css';
const NasaContext = createContext();
export default function App() {
  const value = {
    x: 1,
    y: 2,
    z: 3,
    a: [1, 2, 3, 4, 5, 6, 7, 8],
    b: ['html', 'css'],
  };
  return (
    <NasaContext.Provider value={value}>
      <C1 />
    </NasaContext.Provider>
  );
}

const C1 = () => <C2 />;
const C2 = () => <C3 />;
const C3 = () => <C4 />;
const C4 = () => <C5 />;
const C5 = () => <C6 />;
const C6 = () => <C7 />;
const C7 = () => <C8 />;
const C8 = () => <C9 />;
const C9 = () => <C10 />;

function C10() {
  const data = useContext(NasaContext);
  // console.log(data);
  return (
    <div>
      <h1>C10 component</h1>
      <h2>x:{data.x}</h2>
      <h2>y:{data.y}</h2>
      <h2>z:{data.z}</h2>
      <h2>a:{data.a}</h2>
      <h2>b:{data.b}</h2>
    </div>
  );
}
