import { Client } from "pg";

export class Database {
    static client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: `${process.env.DB_PASSWORD}`,
        database: process.env.DB_NAME,
    });

    static connect = async () => {
        try {
            await Database.client.connect();
            console.log("connected");
        } catch (error) {
            console.error("filed to connect: ", error);
        }
    }
}
