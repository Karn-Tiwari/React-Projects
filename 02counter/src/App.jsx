import { useState } from "react";

function App() {
  // let counter = 7;
  let [plusCounter, setPlusCounter] = useState(0);
  let [minusCounter, setMinusCounter] = useState(15);
  const addCounter = () => {
    if (plusCounter < 20) setPlusCounter(plusCounter + 1);
  };
  const removeCounter = () => {
    if (minusCounter > 0) setMinusCounter(minusCounter - 1);
  };
  return (
    <>
      <h3>Counter clock project</h3>
      <p>Click the button to increment and decrement the counter clock</p>
      <button onClick={addCounter}>Increment {plusCounter}</button>
      <br />
      <button onClick={removeCounter}>Decrement {minusCounter}</button>
    </>
  );
}

export default App;
