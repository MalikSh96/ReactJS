import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      {/* Creating a component */}
      {/* To include our Greet component, in this app component we simply specify
        the component as a custom hmtl tag */}

      {/* <Greet name='Malik' heroName='The marker'> 
        <p>This is children props</p>
      </Greet>
      
      <Greet name='Souheib' heroName='The sniper'>
        <button>Action</button>
      </Greet>

      <Greet name='Mack' heroName='The joker'/> */}

      <Welcome name='Malik' heroName='The marker'/>
      <Welcome name='Souheib' heroName='The sniper'/>
      <Welcome name='Mack' heroName='The joker'/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
