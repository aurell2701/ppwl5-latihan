import { Database } from "bun:sqlite";
import { env } from "./env";

export const db = new Database(env.DB_FILE);

export const initDB = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL
    );
  `);

  const count = db.query("SELECT COUNT(*) as total FROM users").get() as { total: number };

  if (count.total === 0) {
    db.exec(`
      INSERT INTO users (name, role) VALUES
      ('Leo', 'Admin'),
      ('Budi', 'User'),
      ('Sinta', 'Editor');
    `);
  }

  console.log("✅ SQLite initialized");
};