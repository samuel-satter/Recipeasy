const http = require('http');
const url = require('url')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())
app.get('/recipes', (req, res) => {
  console.log('baseUrl', req.protocol, req.path)
  console.log(recipes)
  res.send(recipes)
})

app.get('/recipe', (req, res) => {
  console.log("im here")
  const filteredRecipes = recipes.filter(r => r.id === parseInt(req.query.id))
  // res.send(filteredRecipes)
  res.end(JSON.stringify(filteredRecipes))
})

app.get('/categories/', (req, res) => {
  res.send(categories)
})

app.get('/categoryrecipes', (req, res) => {
  const recipesInCategory = recipes.filter(recipe => recipe.categoryID === parseInt(req.query.id))
  res.end(JSON.stringify(recipesInCategory))
})

app.post('/recipes/', (req, res) => {
  console.log("POSTED")
  console.log(req.body.id, req.body.rating)
  const recipesInCategory = recipes.filter(recipe => recipe.id === parseInt(req.body.id))
  recipesInCategory[0].ratings.push(req.body.rating)
  console.log(recipesInCategory)
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})


const recipes = [
    {
      "id": 1,
      "name": "Caprese Sallad",
      "categoryID": 1,
      "time": "10 minuter",
      "ingredients": ["Färska tomater", "Mozzarellacheese", "Basilikablad", "Balsamvinäger"],
      "instructions": "Arrangera skivade tomater och mozzarella, toppa med basilikablad, ringla över balsamvinäger.",
      "ratings":[],
      "image": "http://example.com/caprese_sallad.jpg"
    },
    {
      "id": 2,
      "name": "Pasta Aglio e Olio",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Spaghetti", "Vitlök", "Olivolja", "Chiliflingor", "Persilja"],
      "instructions": "Stek vitlök i olja, blanda med kokt pasta.",
      "ratings":[],
      "image": "http://example.com/pasta_aglio_e_olio.jpg"
    },
    {
      "id": 3,
      "name": "Bruschetta",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Baguette", "Tomater", "Basilika", "Vitlök", "Balsamvinäger"],
      "instructions": "Rosta bröd, toppa med tomatsblandning.",
      "ratings":[],
      "image": "http://example.com/bruschetta.jpg"
    },
    {
      "id": 4,
      "name": "Quesadillas",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tortillas", "Ost", "Paprika", "Lök", "Kyckling (valfritt)"],
      "instructions": "Fyll tortillas med ost, grönsaker och kyckling; tillaga tills osten smälter.",
      "ratings":[],
      "image": "./Quesadillas.jpg"
    },
    {
      "id": 5,
      "name": "Cilantro Lime Chicken",
      "categoryID": 2,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Koriander", "Lime", "Vitlök", "Kryddor"],
      "instructions": "Marinera kycklingen, tillaga tills den är klar.",
      "ratings":[],
      "image": "http://example.com/cilantro_lime_chicken.jpg"
    },
    {
      "id": 6,
      "name": "Salsa",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tomater", "Lök", "Koriander", "Lime", "Jalapeños"],
      "instructions": "Hacka ingredienserna, blanda och servera.",
      "ratings":[],
      "image": "http://example.com/salsa.jpg"
    },
    {
      "id": 7,
      "name": "Vegetable Stir-Fry",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Blandade grönsaker", "Sojasås", "Ingefära", "Vitlök"],
      "instructions": "Stek grönsaker med sås tills de är möra.",
      "ratings":[],
      "image": "http://example.com/vegetable_stir_fry.jpg"
    },
    {
      "id": 8,
      "name": "Teriyaki Chicken",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Teriyakisås", "Broccoli", "Ris"],
      "instructions": "Stek kyckling och grönsaker i teriyakisås, servera över ris.",
      "ratings":[],
      "image": "http://example.com/teriyaki_chicken.jpg"
    },
    {
        "id": 9,
        "name": "Beef and Broccoli Stir-Fry",
        "categoryID": 3,
        "time": "15 minuter",
        "ingredients": ["Nötkött", "Broccoli", "Sojasås", "Ingefära", "Vitlök"],
        "instructions": "Stek nötkött och broccoli med sås tills de är genomstekta.",
        "ratings":[],
        "image": "http://example.com/beef_broccoli_stir_fry.jpg"
    }
      
  ]

const categories = [
    {
      "id": 1,
      "name": "Italiensk",
      "description": "Deliciosa italienska recept."
    },
    {
      "id": 2,
      "name": "Mexikansk",
      "description": "Autentiska mexikanska smaker."
    },
    {
      "id": 3,
      "name": "Asiatisk",
      "description": "Snabba och smakrika asiatiska rätter."
    }
  ];
  