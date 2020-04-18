
exports.up = function(knex) {
  return knex.schema.createTable('telefone',function(table){
      table.increments();
      table.string('number').notNullable();
      table.string('description');

      table.string('id_cliente');

      table.foreign('id_cliente').references('id').inTable('cliente');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('telefone');
};
