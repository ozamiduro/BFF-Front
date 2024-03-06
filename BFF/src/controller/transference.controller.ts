import type { NextFunction, Request, Response } from "express";
import {
  SendTransference,
  Transference,
} from "../entitites/Transference.entity";

export const getTransferences = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const transference1 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference2 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference3 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference4 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference5 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference6 = new Transference(
    1,
    "Pepito Cardenas",
    432434,
    new Date(2024, 2, 31)
  );
  const transference7 = new Transference(
    1,
    "Camilo Cardenas",
    432434432545,
    new Date(2024, 1, 21)
  );
  const allTransferences = [
    transference1,
    transference2,
    transference3,
    transference4,
    transference5,
    transference6,
    transference7,
  ];

  try {
    response.send({
      data: allTransferences,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};

export const postTransference = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const transference = new SendTransference(
    232,
    3254543,
    4326565424,
    new Date(2024, 2, 31)
  );

  try {
    response.status(201).send({
      data: transference,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
