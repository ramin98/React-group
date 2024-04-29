const express = require('express');
const router = express.Router();

// Определение маршрутов для /users
router.get('/', (req, res) => {
    res.send('List of users');
});

router.get('/:userId', (req, res) => {
    res.send(`Profile of user with ID: ${req.params.userId}`);
});

module.exports = router;