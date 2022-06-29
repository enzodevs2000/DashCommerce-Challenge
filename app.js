const express = require('express');
const app = express();

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: "My full name is Enzo Nunes Leal Sampaio. I want this job!"
});
    });

module.exports = app;