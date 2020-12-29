import express from "express";
import logger from "morgan";
import * as middlewares from "../middlewares";
import router from "../router";

export default (app: express.Application) => {
 app.use(express.json());
 app.use(
  express.urlencoded({
   extended: false
  })
 );
 app.use(logger("dev"));
 app.use(middlewares.cors);
 app.use(router);

 return app;
};
