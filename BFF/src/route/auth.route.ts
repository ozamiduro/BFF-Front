import { type RequestHandler, Router } from "express";
import { postLogin, postRegistry } from "../controller/auth.controller";

export const authRouter = Router();

authRouter.post("/login", postLogin as RequestHandler);
authRouter.post("/registry", postRegistry as RequestHandler);
