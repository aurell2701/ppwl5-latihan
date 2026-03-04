/* =========================
   ENV (Issue: Langsung di index)
   Tugas: 
   1. pindahkan ke file khusus (config/env.ts), 
   2. gunakan `export const env = {...}` untuk menyimpan data env
   3. tambahkan property DB_FILE berisi process.env.DB_FILE ke dalam `const env = {...}`
   4. cek kondisi if (!process.env.DB_FILE) console.warn("⚠ DB_FILE not set, using default database.sqlite");
========================= */

export const env = {
    DB_FILE : process.env.DB_FILE || "database.sqlite",
    PORT : process.env.PORT || 3000,
    NODE_ENV : process.env.NODE_ENV || "development"
}

if (!process.env.DB_FILE) console.warn("⚠ DB_FILE not set, using default database.sqlite");
console.log("Running in:", env.NODE_ENV);