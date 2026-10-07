import { Router } from "express";
import { authController } from "./controllers/auth.controller";
import { validateSignup } from "./middlewares/validation.middleware";

export const router = Router();

router.post("/signup", validateSignup, authController.signup);

router.get("/", authController.healthCheck);
