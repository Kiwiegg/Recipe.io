const express = require("express");
const router = express.Router();

const axios = require("axios").default;

const qs = require("querystring");

const APIkey = "406da80205444f97be21d8a5182a7846";

router.get("/", (req, res) => {
    res.send("api is working");
});

router.get("/searchRecipe/:ing/:num", (req, res) => {
    var ingredients = req.params.ing;
    var number = req.params.num || 10;

    if (!ingredients) {
        res.statusCode(400).send("Bad Request");
    }

    var params = {
        apiKey: APIkey, 
        ingredients: ingredients,
        number: number,
        ranking: 2
    };

    var options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/findByIngredients?' + qs.stringify(params),              
    }
    console.log(options);
    axios.request(options).then(data => {
        res.send(data.data);
    }).catch(err => {
        console.log(err);
    })
});

router.get('/recipeInfo/:id', (req,res) => {
    var id = req.params.id;
    
    if (!id) {
        res.statusCode(400).send("Bad Request");
    } 

    var params = {
        apiKey: APIkey, 
        includeNutrition: true,
    };

    var options = {
        method: 'GET',
        url: `https://api.spoonacular.com/recipes/${id}/information?` + qs.stringify(params)
    }
    console.log(options);
    axios.request(options).then(data => {
        res.send(data.data);
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;
