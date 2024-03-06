import { type RequestHandler, Router } from "express";
import { getInformationById } from "../controller/information.controller";

export const informationRouter = Router();

informationRouter.get("/:id", getInformationById as RequestHandler);
