import './App.css';
import useCounter from './store.js';

function App() {
  const {counter,up,down} = useCounter();
  return (
    <div className="App">  
      <h3>현재 온도 {counter}℃</h3>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
