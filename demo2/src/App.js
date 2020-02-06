import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './Component/ComponentC';
import {UserProvider} from './Component/UserContext'
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';


class App extends Component {
  render(){
  return (
    <div className="App">
     
      {/* <UserProvider value='Monalissa'>
        <ComponentC/>
        </UserProvider>    1st Approach*/ }
     {/* <ComponentC/> */}
    {/* <PostList/>  */}
    <PostForm/>
    </div>
  );
}
}

export default App;
