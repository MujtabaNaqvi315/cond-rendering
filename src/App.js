import Login from './components/Login';
import './App.css';

var isLoggedIn = false;

function renderConditionally () {
  if (isLoggedIn === true) {
    return <h1>Hello</h1> ;
  } else {
    return (
      <Login />
    );
  }
}

function App() {
  return (
    <div className='container'>
      {renderConditionally()}
    </div>
  );
}

export default App;
