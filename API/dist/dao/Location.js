"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationDAO = void 0;
const db_1 = require("../config/db");
class LocationDAO {
}
exports.LocationDAO = LocationDAO;
LocationDAO.findGeomByCoordinate = (longitude, latitude) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.Database.client.query(`SELECT ST_AsGeoJSON(geometry) AS data FROM fields
        WHERE ST_Covers( geometry, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326) );`);
    const data = res.rows.length ? JSON.parse(res.rows[0].data) : {};
    return data;
});
LocationDAO.findCoveredArea = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.Database.client.query("SELECT ST_AsGeoJSON(ST_Union(geometry)) AS data FROM fields;");
    const data = res.rows.length ? JSON.parse(res.rows[0].data) : {};
    return data;
});
//# sourceMappingURL=Location.js.map