import type { NextFunction, Request, Response } from "express";
import { requestGET } from "../utils/requests/requests";

export const getInformationById = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = request.params.id;

  try {
    const resultClient = await requestGET("CLIENT", `/clients/${idUser}`);
    const resultWallet = await requestGET(
      "TRANSACTIONS",
      `/wallets/user/${resultClient.id}`
    );
    const totalCashInTransactions = resultWallet.reduce(
      (acc: number, curr: any) => {
        return acc + curr.amount;
      },
      0
    );

    const data = {
      id: resultClient.id,
      name: resultClient.name,
      email: resultClient.email,
      birth: resultClient.birth,
      totalCashInTransactions: totalCashInTransactions,
    };

    response.send({
      data,
      timestamp: new Date(),
    });
  } catch (error) {
    next(error);
  }
};
