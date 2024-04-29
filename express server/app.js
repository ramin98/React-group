const express = require('express');
const userRoutes = require('./users');
const articleRoutes = require('./articles');
const HOST = 5000
const app = express();

// Использование роутеров
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.listen(HOST, () => {
    console.log(HOST + 'works')
})