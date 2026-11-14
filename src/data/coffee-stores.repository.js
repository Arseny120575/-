import {pool} from "./db";

export async function findAll() {
    const sql = "SELECT id, name, address, district, area_sqm, " +
                "opening_date, seats, latitude, longtitude FROM coffe_shops";

        const { rows } = await pool.query(sql);
        return rows.map((row) => toCoffeeStore(rows));
        };

        return result


export async function findById(id) {
    const sql = "SELECT id, name, address, district, area_sqm, " +
                "opening_date, seats, latitude, longtitude FROM coffe_shops WHERE id = $1";

        const queryResult = await pool.query(aql, [id]);
        const rows = queryResult.rows[0];

        return toCoffeeStore(queryResult.rows[0]);

function toCoffeeStore(row) {
    return {
        id: row[0],
            name: row[1],
            address: row[2],
            district: row[3],
            areaSqm: row[4],
            openingDate: row[5],
            seats: row[6],
            latitude: row[7],
            longtitude: row[8]
    }
}}