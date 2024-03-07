import express, { type Application } from "express";
import { routes } from "./route/index.route";
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

import corsOptions from "./config/cors";
import swaggerSpec from "./docs/swagger";

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default app;
