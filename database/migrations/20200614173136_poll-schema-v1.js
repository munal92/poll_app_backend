exports.up = function (knex) {
  return knex.schema
    .createTable("poll_detail", (tbl) => {
      tbl.increments("id");
      tbl.string("poll_link").notNullable();
      tbl.string("poll_question").notNullable();
      tbl.string("location_ip");
    })
    .createTable("poll_answers", (tbl) => {
      tbl.increments("id");
      tbl.string("poll_answer", 256).notNullable();
      tbl.integer("answer_count").defaultTo(1);
      tbl.integer("order_id").defaultTo(0);
      tbl
        .integer("poll_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("poll_detail")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("poll_detail")
    .dropTableIfExists("poll_answers");
};
