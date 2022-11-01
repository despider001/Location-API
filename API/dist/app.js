"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const location_1 = require("./routes/location");
// initiate database
db_1.Database.connect();
// Create Express server
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);
app.use("/", location_1.router);
app.all("*", (req, res) => res.status(404).json({ status: "404 - Not Found" }));
exports.default = app;
//# sourceMappingURL=app.js.map