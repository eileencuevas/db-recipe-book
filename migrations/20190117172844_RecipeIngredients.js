
exports.up = function(knex, Promise) {
  return knex.schema.createTable('RecipeIngredients', table => {
      table.integer('recipeId').references('recipes.id');
      table.integer('ingredientId').references('ingredients.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('RecipeIngredients');
};
