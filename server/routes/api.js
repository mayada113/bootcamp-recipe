const express = require('express')
const router = express.Router()
const request = require('request');


router.get('/sanity', (req, res) => console.log('OK'))



router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (error, response, body) =>
        res.send(JSON.parse(response.body).results)
    );
})



module.exports = router