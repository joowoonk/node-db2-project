exports.up = async function (knex) {
  await knex.schema.alterTable("cars", (tbl) => {
    tbl.text("color");
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("cars", (tbl) => {
    tbl.dropColumn("color");
  });
};
