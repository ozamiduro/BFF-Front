import { type RequestHandler, Router } from "express";
import { getInformationById } from "../controller/information.controller";

export const informationRouter = Router();

/**
 * @swagger
 * /api/info/{id}:
 *   get:
 *     description: Return basic information by user ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Parameter with the user ID
 *         schema:
 *           type: integer
 *           format: int64
 *           minimun: 1
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *               - $ref: 'src/docs/schemas/structure'
 *               - properties:
 *                 data:
 *                   type: object
 *                   $ref: 'src/docs/schemas/information'
 *             example:
 *               timestamp: "2024-03-07T02:48:59.798Z"
 *               data:
 *                 id: 123
 *                 name: 'Camila Rodriguez'
 *                 email: 'camilarodriguez@gmail.com'
 *                 date: '2024-02-31'
 *                 idBalance: 1
 *                 balance: 12345353443
 */
informationRouter.get("/:id", getInformationById as RequestHandler);
