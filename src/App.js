// import Login from './components/Login';
import Form from './components/Form';
import './App.css';

var userIsRegistered = false;
// var isLoggedIn = false;

function App() {
  return (
    <div className='container'>
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      <Form 
        isRegistered = {userIsRegistered}
      />
    </div>
  );
}

export default App;
