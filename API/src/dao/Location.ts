import { Database as db } from "../config/db";

export class LocationDAO {

    static findGeomByCoordinate = async (longitude: number, latitude: number) => {
        const res = await db.client.query(`SELECT ST_AsGeoJSON(geometry) AS data FROM fields
        WHERE ST_Covers( geometry, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326) );`);
        const data = res.rows.length ? JSON.parse(res.rows[0].data) : {};
        return data;
    }

    static findCoveredArea = async () => {
        const res = await db.client.query("SELECT ST_AsGeoJSON(ST_Union(geometry)) AS data FROM fields;");
        const data = res.rows.length ? JSON.parse(res.rows[0].data) : {};
        return data;
    }
            
}
