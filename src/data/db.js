import pg from 'pg';
import dotenv from 'dotenv';

dotenv.cofig();

if (!process.env.DATABASE_URL) {
    throw new Error("Не задана переменная DATABASE_URL. Проверьте файл .env");
}

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 2,
    connectionTimeoutMillis: 5000,
});

pool.on("error", (err) => {
    console.log("Соединение с базой данных потерянно:", err.message);
});

pool.on("connect", (err) => {
    console.log("Соединение с базой данных установлено:");
});