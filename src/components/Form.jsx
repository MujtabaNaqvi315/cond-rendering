import Input from './Input';
import { useState } from 'react';

function Form ({ isRegistered, headingText, handleClick }) {

    const [background, setBackground] = useState({backgroundColor: 'white'});

    function handleMouseOver () {
        setBackground({backgroundColor: 'black'});
    }

    function handleMouseOut () {
        setBackground({backgroundColor: 'white'});
    }

    return (
        <form className="form">
            <h1>{headingText}</h1>
            <Input 
                type = "text"
                placeholder = "Username"
            />
            <Input 
                type = "password"
                placeholder = "Password"
            />
            {!isRegistered && <Input type = "password" placeholder = "Confirm Password" />}
            
            <button 
              style={background} 
              onClick={handleClick} 
              onMouseOver={handleMouseOver} 
              onMouseOut={handleMouseOut} 
              type="submit">
                
                {isRegistered ? "Login" : "Register"}
            
            </button>
        </form>
    );
}

export default Form;