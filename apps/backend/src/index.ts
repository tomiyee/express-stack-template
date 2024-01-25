import express from "express";
import cors from "cors";
import {createServer} from "http";
import usersRouter from "./routes/users.js";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use("/api/users", usersRouter);

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});