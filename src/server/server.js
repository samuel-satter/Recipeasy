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
      "instructions": [
        "Skär färska tomater i tunna skivor.",
        "Skär mozzarellacheese i skivor.",
        "Arrangera skivade tomater och mozzarella på en tallrik.",
        "Toppa med färska basilikablad.",
        "Ringla över balsamvinäger som dressing."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://images.unsplash.com/photo-1622637012640-83ff490e189f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
      "id": 2,
      "name": "Pasta Aglio e Olio",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Spaghetti", "Vitlök", "Olivolja", "Chiliflingor", "Persilja"],
      "instructions": [
        "Koka spagetti enligt anvisningarna på förpackningen.",
        "Hetta upp olivolja i en stekpanna och tillsätt finhackad vitlök och chiliflingor efter smak. Stek tills vitlöken är gyllenbrun, ta bort från värmen.",
        "När spagettin är klar, häll av vattnet och blanda den med den stekta vitlöken och olivoljan.",
        "Strö över färsk hackad persilja.",
        "Servera genast."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://img.freepik.com/free-photo/plate-pasta-with-homemade-pesto-sauce_114579-11386.jpg?w=740&t=st=1698178122~exp=1698178722~hmac=73de5987bba8abd9a2e67bb2e91008cd32db2950243c22e3ad9892ed63cf9f2d",
      "comments":[]
     },
    {
      "id": 3,
      "name": "Bruschetta",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Baguette", "Tomater", "Basilika", "Vitlök", "Balsamvinäger"],
      "instructions": [
        "Skär baguetten i skivor och rosta dem i ugnen tills de är gyllenbruna.",
        "Hacka tomaterna, basilikan och vitlöken fint och blanda dem i en skål.",
        "Tillsätt balsamvinäger till tomatblandningen och blanda väl.",
        "När brödet är rostat, ta det ut ur ugnen och låt det svalna något.",
        "Toppa varje brödskiva med tomatsblandningen.",
        "Servera omedelbart."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://images.unsplash.com/photo-1572695157360-1153aaad020b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
      "id": 4,
      "name": "Quesadillas",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tortillas", "Ost", "Paprika", "Lök", "Kyckling (valfritt)"],
      "instructions": [
        "Förbered fyllningen genom att skära paprika, lök och eventuell kyckling i små bitar.",
        "Placera en tortilla på en het stekpanna eller platta och lägg ett lager ost på den ena sidan av tortillan.",
        "Tillsätt din valda fyllning (paprika, lök och/eller kyckling) ovanpå osten.",
        "Vik över tortillan så att den täcker fyllningen och bilda en halvmåneform.",
        "Tillaga quesadillan tills båda sidor är gyllenbruna och osten smälter, ungefär 2-3 minuter per sida.",
        "Ta bort quesadillan från värmen och skär den i kilar.",
        "Servera omedelbart och njut!"
      ],
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
      "instructions": [
        "Marinera kycklingen med hackad koriander, limejuice, finhackad vitlök och dina valda kryddor.",
        "Tillaga kycklingen i en stekpanna eller på grillen tills den är helt klar och saftig, vanligtvis 6-8 minuter per sida beroende på tjockleken.",
        "Servera genast och njut av den fräscha smaken."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://thumbs.dreamstime.com/z/lime-cilantro-garlic-mustard-olive-oil-marinated-grilled-chicken-breast-dark-background-top-view-lime-cilantro-garlic-mustard-283238728.jpg?w=768",
      "comments":[]
    },
    {
      "id": 6,
      "name": "Salsa",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tomater", "Lök", "Koriander", "Lime", "Jalapeños"],
      "instructions": [
        "Skär tomaterna, löken och jalapeños i små bitar.",
        "Blanda de hackade ingredienserna tillsammans i en skål.",
        "Tillsätt finhackad koriander och limejuice i blandningen och rör om väl.",
        "Låt salsan stå i kylen i några minuter för att förstärka smakerna innan servering."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://images.unsplash.com/photo-1529566260205-50597c058463?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
      "id": 7,
      "name": "Vegetable Stir-Fry",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Blandade grönsaker", "Sojasås", "Ingefära", "Vitlök"],
      "instructions": [
        "Skär de blandade grönsakerna i bitar.",
        "Hetta upp olja i en stekpanna och tillsätt finhackad ingefära och vitlök.",
        "Tillsätt grönsakerna och stek dem tills de är möra, tillsätt sedan sojasås och rör om väl.",
        "Servera omedelbart."
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
      "id": 8,
      "name": "Teriyaki Chicken",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Teriyakisås", "Broccoli", "Ris"],
      "instructions": [
        "Stek kycklingen och broccoli i teriyakisås tills de är genomstekta.",
        "Servera över ris och njut!"
      ],
      "ratings":[],
      "averageRating": 0.0,
      "image": "https://images.unsplash.com/photo-1636401870585-a8852371e84a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "comments":[]
    },
    {
        "id": 9,
        "name": "Beef and Broccoli Stir-Fry",
        "categoryID": 3,
        "time": "15 minuter",
        "ingredients": ["Nötkött", "Broccoli", "Sojasås", "Ingefära", "Vitlök"],
        "instructions": [
          "Skär nötköttet och broccolin i bitar.",
          "Hetta upp olja i en stekpanna och tillsätt finhackad ingefära och vitlök.",
          "Tillsätt nötkött och broccoli och stek dem tills de är genomstekta, tillsätt sedan sojasås och rör om väl.",
          "Servera omedelbart."
        ],
        "ratings":[],
        "averageRating": 0.0,
        "image": "https://plus.unsplash.com/premium_photo-1664478238082-3df93e48c491?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVlZiUyMGFuZCUyMGJyb2Njb2xpJTIwc3RpciUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D",
        "comments":[]
    }
      
  ]

const categories = [
    {
      "id": 1,
      "name": "Italiensk",
      "description": "Goda italienska recept."
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
  