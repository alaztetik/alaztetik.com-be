import express from "express";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

export function boot() {
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}
