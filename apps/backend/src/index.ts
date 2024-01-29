import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import usersRouter from './routes/users.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Sets up REST API endpoints --- //

app.use('/api/users', usersRouter);

// --- Sets up static files for serving the built frontend --- //

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
// Serve the compiled React code for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// --- Host the server --- //

const httpServer = createServer(app);
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
