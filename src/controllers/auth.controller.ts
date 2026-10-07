import { NextFunction, Request, Response } from "express";
import { EmailAlreadyUsedError } from "../errors";
import { authService } from "../services/auth.service";

export const authController = {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      await authService.signup(email, password);
      res.status(200).json({ message: "Inscription réussie" });
    } catch (err) {
      if (err instanceof EmailAlreadyUsedError) {
        res.status(409).json({ message: "Email déjà utilisé" });
        return;
      }
      next(err);
    }
  },

  async healthCheck(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: "Health check successful" });
    } catch (err) {
      next(err);
    }
  },
};
