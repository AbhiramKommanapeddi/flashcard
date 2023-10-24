import React, {useState} from 'react';
import './style.css';

export default function Login({ onLogin }) {  

    const [login, setLogin] = useState('login-container front');
    const [signUp, setSignUp] = useState('login-container back');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = () => {
        if (username === 'admin' && password === 'admin') {
            onLogin();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const handleLogin = () => {
        setLogin('login-container front');
        setSignUp('login-container back');
    };

    const handleSignUp = () => {
        setLogin('login-container back');
        setSignUp('login-container front');
    };

    return (
        <div id='login-box'>
            <div class={login}>
                <div class="top">
                    <span>Flash card</span>
                </div>
                <div class="form">
                    <form>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-user"></i></label>
                            <input type="text" placeholder="Username" class="input" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-lock"></i></label>
                            <input type="password" placeholder="Password" class="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" class="btn" onClick={checkCredentials}>Log in</button>
                        <div class="user">New user? <span class="newUser" onClick={handleSignUp}>Sign Up</span></div>
                    </form>
                </div>
            </div>

            <div class={signUp}>
                <div class="top topBack">
                    <span>Flash card</span>
                </div>
                <div class="form formBack">
                    <form>
                        <div class="inputBox inputBoxBack">
                            <label><i class="fa-solid fa-envelope"></i></label>
                            <input type="email" placeholder="Email id" class="input" required />
                        </div>
                        <div class="inputBox inputBoxBack">
                            <label><i class="fa-solid fa-user"></i></label>
                            <input type="text" placeholder="Username" class="input" required />
                        </div>
                        <div class="inputBox inputBoxback">
                            <label><i class="fa-solid fa-lock"></i></label>
                            <input type="password" placeholder="Password" class="input" required />
                        </div>
                        <button type="submit" class="btn btnBack" onClick={checkCredentials}>Sign Up</button>
                        <div class="user userBack">Existing user? <span class="existingUser" onClick={handleLogin}>log In</span></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
