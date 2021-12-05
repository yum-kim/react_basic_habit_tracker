import React from 'react';
import './App.css';

function App() {
  const name = undefined;
  return (
    <>
      <h1>hello</h1>
  {name && <h2>Hi! {name}</h2>}
  {
  ['apple', 'carrot'].map(item => <h2>{item}</h2>)
}  
  </>
  );
}

export default App;
