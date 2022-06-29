const express = require('express');
const app = express();
const morgan = require('morgan');

const route = require('./routes');

app.use(morgan('dev'));
app.use('/dashcommercetest', route);
app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: "My full name is Enzo Nunes Leal Sampaio. I want this job!"
    });
});

app.use((req, res, next) => {
    const error = new Error('Não encontrado');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    })
})


module.exports = app;