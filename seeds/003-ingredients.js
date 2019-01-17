
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'mozzarella cheese', quantity: 10},
        {name: 'lettuce', quantity: 2},
        {name: 'pinto beans', quantity: 2}
      ]);
    });
};
