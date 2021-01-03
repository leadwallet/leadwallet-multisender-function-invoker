import express from "express";
import config from "./config";
// import axios from "axios";

let app: express.Application = express();
const port = parseInt(process.env.PORT || "9600");

// Function to ping self every 5 minutes to prevent idling
// const pingSelf = () => {
//  setInterval(async () => {
//   const response = await axios.get(
//    "https://leadwallet-multisender-function-invoker-a901e9.us1.kinto.io/api"
//   );
//   console.log(" Ping Result: \n", JSON.stringify(response.data, null, 2));
//  }, 60 * 5 * 1000);
// };

app = config(app);

app.listen(port, () => {
 console.log(`App is running on ${port}`);
// pingSelf();
});
