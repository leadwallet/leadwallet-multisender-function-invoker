import express from "express";
import { ping, executeTx } from "./lambdas";

const app: express.Application = express();
const port = parseInt(process.env.PORT || "9600");

app.use(express.json());

app.get("/ping", async (req, res) => {
 const response = await ping();
 console.log(response);
 res.status(200).json("Done");
});

app.post("/executeTx", async (req, res) => {
 const response = await executeTx(req.body);
 console.log(response);
 res.status(200).json("Done");
});

app.listen(port, () => console.log(`App is running on ${port}`));
