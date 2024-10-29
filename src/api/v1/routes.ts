import { Hono } from "hono"
import { middleware } from "../../middlewares/middleware";

const route = new Hono();

route.get('/', middleware, (c) => {
    return c.text('Hello route.');
});

export default route;