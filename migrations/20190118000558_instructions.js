
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', table => {
      table.increments();
      table
        .string('instruction', 1000)
        .notNullable();
      table
        .integer('recipeId')
        .unsigned()
        .references('recipes.id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
};
