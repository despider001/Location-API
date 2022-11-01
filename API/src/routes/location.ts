import { Router, Request, Response, NextFunction } from "express";
import express from "express";
import { LocationDAO } from "../dao/Location";
export const router: Router = express.Router();

router.get("/delineated-fields", async (req: Request, res: Response, next: NextFunction) => {
    const long = +req.query.long;
    const lat = +req.query.lat;
    if(isNaN(long) || isNaN(lat)) {
        return res.status(422).json({error: "Unprocessable Entity", hint: "/delineated-fields?long=LONGITUDE&lat=LATITUDE"});
    }
    const result = await LocationDAO.findGeomByCoordinate(long, lat);
    res.status(200).json(result);
});

router.get("/delineated-areas", async (req: Request, res: Response, next: NextFunction) => {
    const result = await LocationDAO.findCoveredArea();
    res.status(200).json(result);
});
