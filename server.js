const express = require('express')
const app = express()
const path = require('path')
const urllib = require(`urllib`)


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function(request, response){   
    response.send("Ok")
})

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    let recipesBase
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body) {
        recipesBase = JSON.parse(body).league.standard.results
        res.send(recipesBase)
    });
})




const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})