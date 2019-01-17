
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('RecipeIngredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeIngredients').insert([
        {recipeId: 1, ingredientId: 1},
        {recipeId: 2, ingredientId: 2},
        {recipeId: 3, ingredientId: 3}
      ]);
    });
};
