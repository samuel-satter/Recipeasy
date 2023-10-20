const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true)
    const query= url.parse(req.url, true).query
    console.log(reqUrl.pathname)
    console.log("query = ", query)
    if(reqUrl.pathname.startsWith('/recipes')) {
        res.statusCode = 200;
        console.log("hello im here")
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
        res.end(JSON.stringify(recipes))
    } else if(reqUrl.pathname.startsWith('/recipe')) {
        console.log(query)
        const recipe = recipes.find(r => r.id === parseInt(query.id));
        console.log(query, recipe)
        if(recipe) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
            res.end(JSON.stringify(recipe))
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain')
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
            res.end('Recipe not found')
        }
    } else if (reqUrl.pathname.startsWith('/categories')) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    
      const categoryID = reqUrl.pathname.split('/').pop(); 
      const categoryRecipes = recipes.filter(recipe => recipe.category === categoryID);
    
      if (categoryRecipes.length > 0) {
        res.end(JSON.stringify(categoryRecipes));
      } else {
        res.end('No recipes found for the specified category');
      }
    
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
        res.end('not found')
    }
});
const port = 3000;
server.listen(port, 'localhost', () => {
    console.log(`Server running at http://localhost:${port}/`);
});
const recipes = [
    {
      "id": 1,
      "name": "Caprese Sallad",
      "categoryID": 1,
      "time": "10 minuter",
      "ingredients": ["Färska tomater", "Mozzarellacheese", "Basilikablad", "Balsamvinäger"],
      "instructions": "Arrangera skivade tomater och mozzarella, toppa med basilikablad, ringla över balsamvinäger.",
      "ratings":[],
      "image": "https://example.com/caprese_sallad.jpg"
    },
    {
      "id": 2,
      "name": "Pasta Aglio e Olio",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Spaghetti", "Vitlök", "Olivolja", "Chiliflingor", "Persilja"],
      "instructions": "Stek vitlök i olja, blanda med kokt pasta.",
      "ratings":[],
      "image": "https://example.com/pasta_aglio_e_olio.jpg"
    },
    {
      "id": 3,
      "name": "Bruschetta",
      "categoryID": 1,
      "time": "15 minuter",
      "ingredients": ["Baguette", "Tomater", "Basilika", "Vitlök", "Balsamvinäger"],
      "instructions": "Rosta bröd, toppa med tomatsblandning.",
      "ratings":[],
      "image": "https://example.com/bruschetta.jpg"
    },
    {
      "id": 4,
      "name": "Quesadillas",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tortillas", "Ost", "Paprika", "Lök", "Kyckling (valfritt)"],
      "instructions": "Fyll tortillas med ost, grönsaker och kyckling; tillaga tills osten smälter.",
      "ratings":[],
      "image": "https://example.com/quesadillas.jpg"
    },
    {
      "id": 5,
      "name": "Cilantro Lime Chicken",
      "categoryID": 2,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Koriander", "Lime", "Vitlök", "Kryddor"],
      "instructions": "Marinera kycklingen, tillaga tills den är klar.",
      "ratings":[],
      "image": "https://example.com/cilantro_lime_chicken.jpg"
    },
    {
      "id": 6,
      "name": "Salsa",
      "categoryID": 2,
      "time": "10 minuter",
      "ingredients": ["Tomater", "Lök", "Koriander", "Lime", "Jalapeños"],
      "instructions": "Hacka ingredienserna, blanda och servera.",
      "ratings":[],
      "image": "https://example.com/salsa.jpg"
    },
    {
      "id": 7,
      "name": "Vegetable Stir-Fry",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Blandade grönsaker", "Sojasås", "Ingefära", "Vitlök"],
      "instructions": "Stek grönsaker med sås tills de är möra.",
      "ratings":[],
      "image": "https://example.com/vegetable_stir_fry.jpg"
    },
    {
      "id": 8,
      "name": "Teriyaki Chicken",
      "categoryID": 3,
      "time": "15 minuter",
      "ingredients": ["Kyckling", "Teriyakisås", "Broccoli", "Ris"],
      "instructions": "Stek kyckling och grönsaker i teriyakisås, servera över ris.",
      "ratings":[],
      "image": "https://example.com/teriyaki_chicken.jpg"
    },
    {
        "id": 9,
        "name": "Beef and Broccoli Stir-Fry",
        "categoryID": 3,
        "time": "15 minuter",
        "ingredients": ["Nötkött", "Broccoli", "Sojasås", "Ingefära", "Vitlök"],
        "instructions": "Stek nötkött och broccoli med sås tills de är genomstekta.",
        "ratings":[],
        "image": "https://example.com/beef_broccoli_stir_fry.jpg"
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
  