const express = require('express');
const Feedback = require('../models/Feedback');
const User = require('../models/User'); // Import User model
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

// POST: Submit feedback
router.post('/', verifyToken, async (req, res) => {
    try {
        const { feedback } = req.body;
        const newFeedback = new Feedback({ userId: req.user.id, feedback });
        await newFeedback.save();
        res.json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
});

// GET: Fetch all feedback (Admin only)
router.get('/', verifyToken, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Populate user details (username)
        const feedbacks = await Feedback.find().populate('userId', 'username');
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error });
    }
});

module.exports = router;
