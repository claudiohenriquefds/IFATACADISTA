
exports.up = function(knex) {
  return knex.schema.createTable('telefone',function(table){
      table.increments();
      table.string('number').notNullable();
      table.string('description');

      table.string('id_usuario');

      table.foreign('id_usuario').references('idUsuario').inTable('usuario');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('telefone');
};
