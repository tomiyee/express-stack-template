import express, { Request, Response } from "express";

const usersRouter = express.Router();

/**
 * Returns a list of users.
 * 
 * @name GET /api/users
 */
usersRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello from users!");
});

export default usersRouter;