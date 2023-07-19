module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './migrations/database.db', // Replace with the correct path to your SQLite database file
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true,
  },
};
