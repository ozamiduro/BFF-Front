import type { NextFunction, Request, Response } from "express";
import { User } from "../entitites/User.entity";
import { Balance } from "../entitites/Balance.entity";

export const getInformationById = async (
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

  const balance = new Balance(1, 232, 3144324432);

  try {
    const idUser = request.params.id;

    const data = {
      ...user,
      idBalance: balance.id,
      balance: balance.balance,
    };

    response.send({
      data,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
