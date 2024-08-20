import express, { Express, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
