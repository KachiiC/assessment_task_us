import express, { Express, json } from "express";
import cors from "cors";
import protect from 'overload-protection'
import dotenv from "dotenv";
import router from "./router";

const protectionConfig = {
  production: false, 
  clientRetrySecs: 1, 
  sampleInterval: 5, 
  maxEventLoopDelay: 42, 
  maxHeapUsedBytes: 0, 
  maxRssBytes: 0,
  errorPropagationMode: false,
  logging: false
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(json());
app.use(cors());
app.use(router);
app.use(protect("express", protectionConfig));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
