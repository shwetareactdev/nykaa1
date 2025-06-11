import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './AdminPanel.css';

const AdminPanel = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/feedback', {
                    headers: { Authorization: token }
                });
                setFeedbacks(res.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        if (user?.isAdmin) {
            fetchFeedbacks();
        }
    }, [user]);

    return user?.isAdmin ? (
        <div className="admin-panel-container">
            <h2>Feedbacks</h2>
            {feedbacks.length > 0 ? (
                <ul>
                    {feedbacks.map((fb) => (
                        <li key={fb._id} className="feedback-item">
                            <strong>{fb.userId?.username || 'Unknown User'}</strong>
                            <p>{fb.feedback}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty-state">
                    <img src="https://via.placeholder.com/50" alt="No feedback" />
                    <span>No feedback available.</span>
                </div>
            )}
        </div>
    ) : (
        <div className="access-denied">
            Access denied
        </div>
    );
};

export default AdminPanel;
