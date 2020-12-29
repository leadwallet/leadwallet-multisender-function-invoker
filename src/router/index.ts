import express from "express";
import * as executors from "../executors";

const router = express.Router();
const mainRouter = express.Router();

router.get("/", executors.ping);
router.post("/executeTx", executors.executeTx);
router.post("/getFee", executors.getFee);

mainRouter.use("/api", router);

export default mainRouter;
