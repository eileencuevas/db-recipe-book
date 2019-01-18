
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', table => {
      table.integer('dishId');
  })
};

exports.down = function(knex, Promise) {
  return knex.dropColumn('dishId');
};
