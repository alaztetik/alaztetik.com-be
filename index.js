import express from "express";
import authRouter from "./controllers/auth.js";
import rateLimit from "./controllers/rateLimit.js";

export const app = express();

app.use(rateLimit);

app.use('/login', authRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
