import express, { Request, Response } from 'express';
import { userIsLoggedIn } from './middleware.js';

const tasksRouter = express.Router();

tasksRouter.get('/', [userIsLoggedIn], (req: Request, res: Response) => {
  // Get all of the user's tasks
  res.send('Hello from tasks!');
});

export default tasksRouter;
