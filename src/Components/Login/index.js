import './login.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const { userDetails } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        //Login Verification
        if(email && password){
            if(userDetails.email === email && userDetails.password === password){
                setIsError(false);
                navigate(`/profile`);
            }else{
                setIsError(true);
                console.log('Email/Password is not matching.')
            }
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {isError && <div className='error'>Invalid credentials!</div>}
                    <div className='button-wrapper'>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;