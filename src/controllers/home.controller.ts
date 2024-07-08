import { Elysia } from "elysia";

export const homeController = new Elysia({ prefix: "/" }).get("", (req, res) => {});
