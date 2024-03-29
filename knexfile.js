require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/poll";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/poll.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  production: {
    client: "pg",
    connection: pgConnection,
    // useNullAsDefault: true,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
