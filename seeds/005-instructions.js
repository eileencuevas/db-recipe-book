
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction: 'add cheese', recipeId: 1},
        { instruction: 'add more cheese', recipeId: 1},
        { instruction: 'go to the store and buy more stuff', recipeId: 1},
      ]);
    });
};
