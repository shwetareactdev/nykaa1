import { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Login from './Login'; // Import Login component
import './Feedback.css'; // Import the CSS file

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const { user } = useContext(AuthContext);

    const submitFeedback = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/feedback', { feedback }, {
                headers: { Authorization: token }
            });
            setIsSuccess(true);
            setFeedback('');
        } catch (error) {
            alert('Error submitting feedback');
        }
    };

    return user ? (
        <div className="feedback-container">
            <div className="feedback-ideas">
                <h3>We'd love to hear your ideas!</h3>
                <p>Your feedback helps us make your experience better. Share your thoughts on what you'd like to see next.</p>
            </div>
            <h2>Welcome, {user.username}!</h2>
            <textarea 
                className="feedback-textarea"
                placeholder="Enter your feedback" 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
            />
            <button onClick={submitFeedback}>Submit</button>
            {isSuccess && (
                <div className="success">
                    <span className="tick-mark">&#10004;</span> Feedback submitted successfully!
                </div>
            )}
        </div>
    ) : (
        
        <div className="login-prompt">
            <h2>Please log in to submit feedback</h2>
            <Login />  {/* Render Login form here */}
        </div>
    );
};

export default Feedback;
