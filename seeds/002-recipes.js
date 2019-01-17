
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pan pizza', description: 'a pan pizza'},
        {name: 'fresh taco', description: 'the FRESHEST taco'},
        {name: 'bean stew', description: 'not spicy beans'}
      ]);
    });
};
