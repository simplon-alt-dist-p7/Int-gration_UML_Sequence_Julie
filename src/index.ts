import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/error.middleware";
import { router } from "./router";

async function main() {
  await AppDataSource.initialize();
  console.log("Connecté à PostgreSQL");

  const app = express();
  app.use(express.json());
  app.use("/auth", router);
  app.use(errorHandler);

  const port = Number(process.env.PORT ?? 3000);
  app.listen(port, () => console.log(`API démarrée sur http://localhost:${port}`));
}

main().catch((err) => {
  console.error("Échec du démarrage", err);
  process.exit(1);
});
