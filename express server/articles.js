const express = require('express');
const router = express.Router();

// Определение маршрутов для /articles
router.get('/', (req, res) => {
    res.send('List of articles');
});

router.get('/:articleId', (req, res) => {
    res.send(`Details of article with ID: ${req.params.articleId}`);
});

module.exports = router;