import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './Login.css'; // Add the CSS file here

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            login(res.data.token);

            if (res.data.isAdmin) {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Welcome Back to Nykaa!</h2>
                    <p className="login-description">Your beauty essentials are just a login away.</p>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                    <button type="submit" className="login-btn">Login</button>
                    <p className="signup-link">
                        Not registered? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>
            {/* <div className="image-container">
                <img src="nykaa/src/Components/HomeComponent/images/catagorytitle.avif" alt="Nykaa Beauty" className="nykaa-image" />
            </div> */}
        </div>
    );
};

export default Login;
