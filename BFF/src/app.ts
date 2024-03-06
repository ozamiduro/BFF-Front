import express, { type Application } from "express";
import { routes } from "./route/index.route";
const cors = require("cors");

import corsOptions from "./config/cors";

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

export default app;
