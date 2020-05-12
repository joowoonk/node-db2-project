exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();

    tbl.uuid("VIN").notNullable();
    tbl.string("make", 255).notNullable().unique();
    tbl.string("model", 255).notNullable().unique();
    tbl.integer("mileage").notNullable().unique();

    //Not required
    tbl.string("transmission type", 20).nullable();
    tbl.string("status of title", 20).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
