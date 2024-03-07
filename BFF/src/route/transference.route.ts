import { type RequestHandler, Router } from "express";
import {
  getTransferences,
  postTransference,
} from "../controller/transference.controller";

export const transferenceRouter = Router();

/**
 * @swagger
 * /api/transferences/{id}:
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
 *                   type: array
 *                   items:
 *                     $ref: 'src/docs/schemas/transference'
 *             example:
 *               timestamp: "2024-03-07T02:48:59.798Z"
 *               data:
 *                 - id: 1
 *                   personName: 'Camila Rodriguez'
 *                   amount: 423545634
 *                   date: '2024-02-31'
 *                 - id: 2
 *                   personName: 'Fernando Cardenas'
 *                   amount: 312454
 *                   date: '2024-02-31'
 */
transferenceRouter.get("/:id", getTransferences as RequestHandler);

/**
 * @swagger
 * /api/transferences:
 *   post:
 *     description: Register a transference
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *               - $ref: 'src/docs/schemas/structure'
 *               - properties:
 *                 data:
 *                   type: object
 *                   $ref: 'src/docs/schemas/transference'
 *             example:
 *               timestamp: "2024-03-07T02:48:59.798Z"
 *               data:
 *                 id: 1
 *                 personName: 'Camila Rodriguez'
 *                 amount: 423545634
 *                 date: '2024-02-31'
 */
transferenceRouter.post("/", postTransference as RequestHandler);
