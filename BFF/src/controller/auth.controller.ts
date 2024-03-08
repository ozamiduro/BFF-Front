import type { NextFunction, Request, Response } from "express";
import { requestGET, requestPOST } from "../utils/requests/requests";

export const getLogin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userId = request.params.id;

  try {
    const resultClient = await requestGET("CLIENT", `/clients/${userId}`);

    if (Object.keys(resultClient).includes("error")) {
      response.status(400).json(resultClient);
    }

    response.send({
      data: resultClient,
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
  const { id, name, email, birth } = request.body;

  const dataToSend = {
    id,
    name,
    email,
    birth,
  };
  try {
    const resultClient = await requestPOST("CLIENT", "/clients", dataToSend);

    if (Object.keys(resultClient).includes("error")) {
      response.status(400).json(resultClient);
    }

    response.status(201).send({
      data: resultClient,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
