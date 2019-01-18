const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

const getRecipeIngredients = () => {
    return db('RecipeIngredients');
}

const getDishes = () => {
    return db('dishes');
}

const getDish = (id) => {
    const dish = db('dishes')
        .where({ id : id });

    const recipes = db('recipes')
        .select('name', 'description')
        .where({ 'dish_id' : id })
    
    return Promise
        .all([dish, recipes])
        .then(results => {
            console.log(results);
            let [dish, recipes] = results;
            return { dish: dish.name, id: dish.id, recipes: recipes };
        })
}

const addDish = (dish) => {
    return db('dishes').insert(dish);
}

const getRecipes = () => {
    return db('recipes');    
}

const addRecipe = (req, res) => {
    return db('recipes').insert(req.body);
}

const getInstructions = (id) => {
    const recipe = db('recipes')
        .where({ id : id });

    const instructions = db('instructions as i')
        .select('i.instruction')
        .where({ 'i.recipeId' : id })

    return Promise
        .all([recipe, instructions])
        .then(results => {
            console.log(results);
            let [recipe, instructions] = results;
            return { recipe: recipe[0].name, instructions: instructions };
        })
}

const getShoppingList = (id) => {
    const recipe = db('recipes')
        .where({ id : id });

    const ingredients = db('recipeIngredients as ri')
        .join('ingredients as in', { 'in.id': 'ri.ingredientId' })
        .select('name', 'quantity')
        .where({ 'ri.recipeId': id });

    return Promise
        .all([recipe, ingredients])
        .then(results => {
            console.log(results);
            let [recipe, ingredients] = results;
            return { 
                recipe: recipe[0].name, 
                id: recipe[0].id, 
                description: recipe[0].description,
                ingredients: ingredients
            };
        })
}

module.exports = { 
    getRecipeIngredients, 
    getDishes, 
    addDish, 
    getDish, 
    getRecipes, 
    addRecipe,
    getInstructions,
    getShoppingList 
};