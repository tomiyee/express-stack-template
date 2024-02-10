import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import usersRouter from './routes/users.js';
import { fileURLToPath } from 'url';
import path from 'path';
import tasksRouter from './routes/tasks.js';
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const app = express();

// Enables the ability to log in and out by saving info to the user's session.
// See middleware for more details on how this works.
app.use(
  session({
    secret: 'eight-bar-line',
    cookie: { secure: false },
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Sets up REST API endpoints --- //

app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);

// --- Sets up static files for serving the built frontend --- //

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
// Serve the compiled React code for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// --- Host the server --- //

const httpServer = createServer(app);
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
