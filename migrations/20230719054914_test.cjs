exports.up = function(knex) {
    return knex.schema.createTable('ZipIt', function(table) {
        table.increments('id').primary();
        table.string('feelings').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
