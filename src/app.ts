import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia();

app.use(html());

app.listen(3000);
