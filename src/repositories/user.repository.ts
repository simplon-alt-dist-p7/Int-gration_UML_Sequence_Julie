import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const repo = () => AppDataSource.getRepository(User);

export const userRepository = {
  findByEmail(email: string): Promise<User | null> {
    return repo().findOneBy({ email });
  },

  create(data: { email: string; passwordHash: string }): Promise<User> {
    return repo().save(repo().create(data));
  },
};
