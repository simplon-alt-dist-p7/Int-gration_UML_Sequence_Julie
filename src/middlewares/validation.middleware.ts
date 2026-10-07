import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().trim().toLowerCase().email("Email invalide"),
  password: z
    .string()
    .min(8, "8 caractères minimum")
    .max(128, "128 caractères maximum")
    .regex(/[a-z]/, "Au moins une minuscule")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[0-9]/, "Au moins un chiffre"),
});

export function validateSignup(req: Request, res: Response, next: NextFunction) {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ errors: result.error.flatten().fieldErrors });
    return;
  }
  req.body = result.data; // données nettoyées (email en minuscules, etc.)
  next();
}
