import argon2 from "argon2";
import { EmailAlreadyUsedError } from "../errors";
import { userRepository } from "../repositories/user.repository";

const PG_UNIQUE_VIOLATION = "23505";

export const authService = {
  async signup(email: string, password: string): Promise<{ id: string; email: string }> {
    const existing = await userRepository.findByEmail(email);
    if (existing) throw new EmailAlreadyUsedError();

    const passwordHash = await argon2.hash(password); // argon2id par défaut

    try {
      const user = await userRepository.create({ email, passwordHash });
      return { id: user.id, email: user.email };
    } catch (err: any) {
      // Race condition : un autre signup a inséré le même email entre-temps
      if (err?.driverError?.code === PG_UNIQUE_VIOLATION) throw new EmailAlreadyUsedError();
      throw err;
    }
  },
};
