import express from "express";
import config from "./config";

let app: express.Application = express();
const port = parseInt(process.env.PORT || "9600");

app = config(app);

app.listen(port, () => console.log(`App is running on ${port}`));
