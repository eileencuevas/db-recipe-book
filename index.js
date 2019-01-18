const express = require('express');
const morgan = require('morgan');

const helpers = require('./api/data/helperFunctions');

const server = express();

server.use(express.json());
server.use(morgan('short'));

// server.get('/', (req, res) => {
//     db.getRecipeIngredients()
//         .then(thing => {
//             res.status(200).json(thing);
//         })
//         .catch(error => {
//             res.status(500).json(error);
//         });
// })

server.get(`/api/dishes/:id`, (req, res) => {
    helpers.getDish(req.params.id)
        .then(dish => {
            if (dish) {
                res.status(200).json(dish);
            } else {
                res.status(404).json({ error: 'Could not find dish with specified ID.' });
            }
        })
        .catch(() => {
            res.status(500).json({ error: `Could not retrieve data for dishes.` });
        });
})

server.get(`/api/dishes`, (req, res) => {
    helpers.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(() => {
            res.status(500).json({ error: `Could not retrieve data for dishes.` });
        });
})

server.post(`/api/dishes`, (req, res) => {
    helpers.addDish(req.body)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(() => {
            res.status(500).json({ error: `Could not add data for dishes.` });
        });
})

server.get(`/api/recipes/:id/instructions`, (req, res) => {
    helpers.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(error => {
            res.status(500).json(error);
        });
})

server.get(`/api/recipes/:id/shopping-list`, (req, res) => {
    helpers.getShoppingList(req.params.id)
        .then(shoppingList => {
            res.status(200).json(shoppingList);
        })
        .catch(error => {
            res.status(500).json(error);
        });
})

server.get(`/api/recipes`, (req, res) => {
    helpers.getRecipes(res)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(() => {
            res.status(500).json({ error: `Could not retrieve data for recipes.` });
        });
})

server.post(`/api/recipes`, (req, res) => {
    helpers.addRecipe(req, res)
        .then(id => {
             res.status(201).json(id);
        })
        .catch(() => {
            res.status(500).json({ error: `Could not add data for recipes.` });
        });
})

server.listen(5000, () => console.log('Server Running on 5000'));