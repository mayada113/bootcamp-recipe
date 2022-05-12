const express = require('express')
const app = express()
const path = require('path')
const urllib = require(`urllib`)


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function(request, response){   
    response.send("Ok")
})

app.get('/recipes/:ingredient', function(req, res){
    let recipes
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data, response) => {
        const result = JSON.parse(data.toString())
        recipes = result.results
        recipes = recipes.map(r => {
            return {
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            }
        })
        res.send(recipes)
    })
})




const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})