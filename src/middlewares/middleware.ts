import { createMiddleware } from "hono/factory";

export const middleware = createMiddleware(async (c, next) => {
    await next();
});
