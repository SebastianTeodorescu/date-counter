import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div >
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);


  function incCount() {
    setCount((c) => c + step);
  }

  function prevCount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setStep((s) => 1);
    setCount((c) => 0);
  }

  return (
    <div className="align">
      <div className="center">
        <span>{step}</span>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
      </div>
      <div className="center">
        <button onClick={prevCount}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={incCount}>+</button>
      </div>
      <div>
        {count === 0 && <p>Today we are in {date.toDateString()}</p>}
        {count > 0 && (
          <p>
            {count} days from today is {date.toDateString()}
          </p>
        )}
        {count < 0 && (
          <p>
            {Math.abs(count)} days ago was {date.toDateString()}
          </p>
        )}
      </div>
      { (count !== 0 || step !== 1) ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div>
  );
}

export default App;
