import './App.css';

const goodRotine = ['Sleep Well', 'Eat Health Food', 'Drink Water', 'Cardio Sessions is Always important', 'Live', 'Repeat', '...']

const task = goodRotine.map((value) => 
  <li>{value}</li>
);

function App() {
  return (
    <div>
      {task}
    </div>
  );
}

export default App;
