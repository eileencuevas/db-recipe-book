
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', table => {
    table.increments();
    table
      .integer('recipeId')
      .unsigned()
      .references('id')
      .inTable('recipes');
    table
      .integer('ingredientId')
      .unsigned()
      .references('id')
      .inTable('ingredients');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
