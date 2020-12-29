import express from "express";

export const cors = (
 req: express.Request,
 res: express.Response,
 next: express.NextFunction
) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST");
 res.header("Company", "Leadwallet");
 next();
};
