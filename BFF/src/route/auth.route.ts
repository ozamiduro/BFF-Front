import { type RequestHandler, Router } from "express";
import { getLogin, postRegistry } from "../controller/auth.controller";

export const authRouter = Router();

/**
 * @swagger
 * /api/auth/login/:id:
 *   get:
 *     description: Return user information
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
 *         description: Resource user found successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *               - $ref: 'src/docs/schemas/structure'
 *               - properties:
 *                 data:
 *                   type: object
 *                   $ref: 'src/docs/schemas/user'
 *             example:
 *               timestamp: "2024-03-07T02:48:59.798Z"
 *               data:
 *                 id: 123
 */
authRouter.get("/login/:id", getLogin as RequestHandler);

/**
 * @swagger
 * /api/auth/registry:
 *   post:
 *     description: Return user information
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               date:
 *                 type: string
 *             example:
 *               id: 123
 *               name: 'Camila Rodriguez'
 *               email: 'camilarodriguez@gmail.com'
 *               date: '2024-02-31'
 *     responses:
 *       201:
 *         description: Resource user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *               - $ref: 'src/docs/schemas/structure'
 *               - properties:
 *                 data:
 *                   type: object
 *                   $ref: 'src/docs/schemas/user'
 *             example:
 *               timestamp: "2024-03-07T02:48:59.798Z"
 *               data:
 *                 id: 123
 *                 name: 'Camila Rodriguez'
 *                 email: 'camilarodriguez@gmail.com'
 *                 date: '2024-02-31'
 */
authRouter.post("/registry", postRegistry as RequestHandler);
