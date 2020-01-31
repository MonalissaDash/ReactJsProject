import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Greet} from './Components/Greet'// for default export
//components are reusable
import Greet from './Components/Greet'// for name export
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ChildComponent from './Components/ChildComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import ComponentA from './Components/ComponentA';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline'
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
function App() {
  return (
    <div className="App">
      <LifeCycleA/>
      {/* <Form/> */}
      {/* <Stylesheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <ComponentA/> */}
      {/* <EventBind/> */}
      {/* <Greet name='one' heroname='SpiderMan' /> {/* passing the properties to greet by creating a object in functional component*/} 
      {/* <Greet name='two' heroname='SuperMan'/>
      <Greet name='three' heroname='Hulk'/> */}
      {/* <Welcome name='one'heroname='SpiderMan'/>{/* passing the properties to greet by creating a object in class component */}
      {/* <Welcome name='two' heroname='SpiderMan'/> */}
      {/*<Hello/>*/} 
      
      {/* <Message/>
      <Counter/>   */}
    </div>
  );
}

export default App;
