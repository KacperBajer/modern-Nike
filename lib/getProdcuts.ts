'use server'
import { Pool } from "pg";
import conn from "./db";

export const getProducts = async () => {
    try {
        const query = `SELECT * FROM products`;
        const result = await (conn as Pool).query(query);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}
