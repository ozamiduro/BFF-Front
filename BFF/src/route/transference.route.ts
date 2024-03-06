import { type RequestHandler, Router } from "express";
import {
  getTransferences,
  postTransference,
} from "../controller/transference.controller";

export const transferenceRouter = Router();

transferenceRouter.get("/:id", getTransferences as RequestHandler);
transferenceRouter.post("/", postTransference as RequestHandler);
