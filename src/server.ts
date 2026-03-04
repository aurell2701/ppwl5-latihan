import { app } from "./app";
import { initDB } from "./config/db";
import { env } from "./config/env";

initDB();
app.listen(env.PORT);
console.log(`🚀 Server running at http://localhost:${env.PORT}`);