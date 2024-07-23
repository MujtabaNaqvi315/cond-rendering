// import Login from './components/Login';
import Form from './components/Form';
import './App.css';
import { useState } from 'react';

var userIsRegistered = false;
// var isLoggedIn = false;

function App() {

  const [headingText, setHeadingText] = useState("Submit");

  function handleClick(e){
    e.preventDefault()
      setHeadingText("Submitted");
  }

  return (
    <div className='container'>
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      <Form 
        headingText={headingText}
        handleClick={handleClick}
        isRegistered = {userIsRegistered}
      />
    </div>
  );
}

export default App;
