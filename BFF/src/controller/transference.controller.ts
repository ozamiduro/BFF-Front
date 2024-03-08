import type { NextFunction, Request, Response } from "express";
import {
  SendTransference,
  Transference,
} from "../entitites/Transference.entity";
import { requestGET, requestPOST } from "../utils/requests/requests";

export const getTransferences = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const id = request.params.id;

  try {
    const resultWallet = await requestGET(
      "TRANSACTIONS",
      `/wallets/user/${id}`
    );

    response.send({
      data: resultWallet,
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
  const { name, userId, amount } = request.body;

  const dataToSend = {
    name,
    userId,
    amount,
  };

  try {
    const resultWallet = await requestPOST(
      "TRANSACTIONS",
      "/wallets",
      dataToSend
    );

    response.status(201).send({
      data: resultWallet,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
