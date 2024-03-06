import { type RequestHandler, Router } from "express";
import { informationRouter } from "./information.route";
import { authRouter } from "./auth.route";
import { transferenceRouter } from "./transference.route";

export const routes = Router();

routes.use("/info", informationRouter);
routes.use("/auth", authRouter);
routes.use("/transferences", transferenceRouter);
