
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pan pizza', description: 'a pan pizza', dish_id: 1},
        {name: 'vegetable pizza', dish_id: 1},
        {name: 'fresh taco', description: 'the FRESHEST taco', dish_id: 2},
        {name: 'bean stew', description: 'not spicy beans', dish_id: 3}
      ]);
    });
};
