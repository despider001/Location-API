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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const Location_1 = require("../dao/Location");
exports.router = express_1.default.Router();
exports.router.get("/delineated-fields", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const long = +req.query.long;
    const lat = +req.query.lat;
    if (isNaN(long) || isNaN(lat)) {
        return res.status(422).json({ error: "Unprocessable Entity", hint: "/delineated-fields?long=LONGITUDE&lat=LATITUDE" });
    }
    const result = yield Location_1.LocationDAO.findGeomByCoordinate(long, lat);
    res.status(200).json(result);
}));
exports.router.get("/delineated-areas", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Location_1.LocationDAO.findCoveredArea();
    res.status(200).json(result);
}));
//# sourceMappingURL=location.js.map