const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())
app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/matching-recipes', (req, res) => {
  const filteredRecipesByName = recipes.filter(r => r.name.toLowerCase().includes(req.query.searchString.toLowerCase()))
  console.log(filteredRecipesByName)
  res.send(filteredRecipesByName)
}) 

app.get('/recipe', (req, res) => {
  const filteredRecipes = recipes.filter(r => r.id === parseInt(req.query.id))
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
  const recipesInCategory = recipes.filter(recipe => recipe.id === parseInt(req.body.id))
  recipesInCategory[0].ratings.push(parseInt(req.body.rating))
  const sumCurrentRatings = recipesInCategory[0].ratings.reduce((partialSum, a) => partialSum + a, 0)
  const average = sumCurrentRatings / recipesInCategory[0].ratings.length
  recipesInCategory[0].averageRating = average.toFixed(2)
  res.send();
})

app.post('/comment', (req,res) => {
  const recipesInCategory = recipes.filter(recipe => recipe.id === parseInt(req.body.id))
  const commentObject = {
    "name": req.body.name,
    "comment": req.body.comment,
    "date": new Date()
  }
  recipesInCategory[0].comments.push(commentObject)
  res.send();
})

app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
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
      "averageRating": 0.0,
      "image": "http://example.com/caprese_sallad.jpg",
      "comments":[]
    },
    {
      "id": 2,
      "name": "Pasta Aglio e Olio",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Spaghetti", "Vitlök", "Olivolja", "Chiliflingor", "Persilja"],
      "instructions": "Stek vitlök i olja, blanda med kokt pasta.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/pasta_aglio_e_olio.jpg",
      "comments":[]
     },
    {
      "id": 3,
      "name": "Bruschetta",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Baguette", "Tomater", "Basilika", "Vitlök", "Balsamvinäger"],
      "instructions": "Rosta bröd, toppa med tomatsblandning.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/bruschetta.jpg",
      "comments":[]
    },
    {
      "id": 4,
      "name": "Quesadillas",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tortillas", "Ost", "Paprika", "Lök", "Kyckling (valfritt)"],
      "instructions": "Fyll tortillas med ost, grönsaker och kyckling; tillaga tills osten smälter.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://images.unsplash.com/photo-1628838233717-be047a0b54fb?auto=format&fit=crop&q=80&w=2056&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
      "id": 5,
      "name": "Cilantro Lime Chicken",
      "categoryID": 2,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Koriander", "Lime", "Vitlök", "Kryddor"],
      "instructions": "Marinera kycklingen, tillaga tills den är klar.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/cilantro_lime_chicken.jpg",
      "comments":[]
    },
    {
      "id": 6,
      "name": "Salsa",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tomater", "Lök", "Koriander", "Lime", "Jalapeños"],
      "instructions": "Hacka ingredienserna, blanda och servera.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/salsa.jpg",
      "comments":[]
    },
    {
      "id": 7,
      "name": "Vegetable Stir-Fry",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Blandade grönsaker", "Sojasås", "Ingefära", "Vitlök"],
      "instructions": "Stek grönsaker med sås tills de är möra.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/vegetable_stir_fry.jpg",
      "comments":[]
    },
    {
      "id": 8,
      "name": "Teriyaki Chicken",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Teriyakisås", "Broccoli", "Ris"],
      "instructions": "Stek kyckling och grönsaker i teriyakisås, servera över ris.",
      "ratings":[],
      "averageRating": 0.0,
      "image": "http://example.com/teriyaki_chicken.jpg",
      "comments":[]
    },
    {
        "id": 9,
        "name": "Beef and Broccoli Stir-Fry",
        "categoryID": 3,
        "time": "15 minuter",
        "ingredients": ["Nötkött", "Broccoli", "Sojasås", "Ingefära", "Vitlök"],
        "instructions": "Stek nötkött och broccoli med sås tills de är genomstekta.",
        "ratings":[],
        "averageRating": 0.0,
        "image": "http://example.com/beef_broccoli_stir_fry.jpg",
        "comments":[]
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
  