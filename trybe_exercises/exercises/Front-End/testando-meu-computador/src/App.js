import './App.css';

function App() {
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    
  }
  
  setInterval(tick, 1000);
}

export default App;
