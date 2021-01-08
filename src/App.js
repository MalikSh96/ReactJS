import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


function App() {
  return (
    <div className="App">
      {/* Creating a component */}
      {/* To include our Greet component, in this app component we simply specify
        the component as a custom hmtl tag */}

      {/* <Greet name='Malik' heroName='The marker'> 
        <p>This is children props</p>
      </Greet> */}

      {/* <Greet name='Souheib' heroName='The sniper'>
        <button>Action</button>
      </Greet> */}

      {/* <Greet name='Mack' heroName='The joker'/> */}

      {/* <Welcome name='Malik' heroName='The Observant'/> */}
      {/* <Welcome name='Souheib' heroName='The sniper'/> */}
      {/* <Welcome name='Mack' heroName='The joker'/> */}

      {/* <Hello /> */}
      {/* <Message />  */}

      {/* <Counter /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}

      {/* <h1 className='err'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* <FragmentDemo /> */}
      {/* <Table /> */}

      {/* <ParentComp /> */}

      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}

      {/* <PortalDemo /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Malik" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Souheib" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Yen3an" />
      </ErrorBoundary> */}

      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
