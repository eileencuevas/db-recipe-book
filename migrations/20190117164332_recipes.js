
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
        table
          .string('name', 255)
          .notNullable()
          .unique('uq_recipes_name');
          table.string('description', 255);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
