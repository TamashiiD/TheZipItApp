/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ZipIt').del()
  await knex('ZipIt').insert([
    {id: 1, Feelings: 'work is too hard'},
    {id: 2, Feelings: 'Im tired of my job'},
    {id: 3, Feelings: 'That lady on the bus was rude'}
  ]);
};
