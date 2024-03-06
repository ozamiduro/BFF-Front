import type { NextFunction, Request, Response } from "express";
import { User } from "../entitites/User.entity";

export const postLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const user = new User(
    232,
    "Fabian Piraneque",
    "fabianpiraneque@meli.com",
    new Date(2024, 2, 30)
  );
  try {
    response.send({
      data: user,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};

export const postRegistry = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const user = new User(
    232,
    "Fabian Piraneque",
    "fabianpiraneque@meli.com",
    new Date(2024, 2, 30)
  );
  try {
    response.status(201).send({
      data: user,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
