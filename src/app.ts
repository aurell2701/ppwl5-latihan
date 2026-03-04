import { Elysia } from "elysia";
import { userRoutes } from "./routes/user.route";
import { staticPlugin } from "@elysiajs/static";

export const app = new Elysia()
  .use(
    staticPlugin({
      assets: "public",
      prefix: "/"
    })
  )
  .use(userRoutes);