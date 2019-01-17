
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
      table.increments();
      table
        .string('name', 255)
        .notNullable()
        .unique('uq_dishes_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
