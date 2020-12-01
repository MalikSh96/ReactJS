import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* Creating a component */}
      {/* To include our Greet component, in this app component we simply specify
        the component as a custom hmtl tag */}
      <Greet />
    </div>
  );
}

export default App;
