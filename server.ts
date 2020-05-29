import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routing.ts";

const app = new Application();
const PORT = 4300;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on ${PORT}...`);
await app.listen({ port: PORT });
