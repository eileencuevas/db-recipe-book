
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', table => {
    table.dropColumn('dishId');
    table
        .integer('dish_id')
        .unsigned()
        .references('dishes.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipes', table => {
      table.dropColumn('dish_id');
  })
};
