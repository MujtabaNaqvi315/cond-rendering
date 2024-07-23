import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

var userIsRegistered = false;
// var isLoggedIn = false;

function App() {
  return (
    <div className='container'>
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {userIsRegistered ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
