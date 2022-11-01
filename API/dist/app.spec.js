"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
describe("GET /", () => {
    it("should return 404 Not Found", () => {
        return supertest_1.default(app_1.default).get("/")
            .expect(404);
    });
});
//# sourceMappingURL=app.spec.js.map