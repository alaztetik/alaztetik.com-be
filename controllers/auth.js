import express from "express";
import basicAuth from "express-basic-auth";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.use(basicAuth({
    users: { [process.env.BASIC_AUTH_USERNAME]: process.env.BASIC_AUTH_PASSWORD },
    unauthorizedResponse: getUnauthorizedResponse
}));

router.use((req, res, next) => {
    console.log("Basic auth successful");
    next();
});

function getUnauthorizedResponse(req) {
    console.log("Basic auth failed");
    return "Something went wrong";
}

export default router;