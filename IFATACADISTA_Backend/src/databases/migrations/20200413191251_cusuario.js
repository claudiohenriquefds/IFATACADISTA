
exports.up = function(knex) {
    return knex.schema.createTable('usuario',function(table){
        table.string('idUsuario').primary();
        table.string('NomeUsuario').notNullable();
        table.string('cpf').notNullable();
        table.string('password').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
