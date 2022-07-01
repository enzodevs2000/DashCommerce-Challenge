const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let user = req.query.user;
    let password = req.query.password;
    let message = {}; 

    if (user === '"dashcommerce"' && password === '"chooseMe"') {
        message = {
            mensagem : "My full name is Enzo Nunes Leal Sampaio. I want this job!"
        }
    }
    else {
        message = {
            mensagem : "Wrong credentials."
        }
    }
    
    res.status(200).send(message);

});

module.exports = router;