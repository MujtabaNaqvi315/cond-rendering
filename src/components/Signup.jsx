import Input from './Input';

function Signup () {
    return (
        <form className="form">
            <Input 
                type = "text"
                placeholder = "Username"
            />
            <Input 
                type = "password"
                placeholder = "Password"
            />
            <Input 
                type = "password"
                placeholder = "Confirm Password"
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default Signup;