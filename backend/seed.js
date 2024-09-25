const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const SEED_PATH = path.join(__dirname, "database/seed.sql");

const seedDatabase = async () => {
  try {
    const seedSql = fs.readFileSync(SEED_PATH, "utf8");

    const database = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });

    await database.query(seedSql);
    await database.end();
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

seedDatabase();
