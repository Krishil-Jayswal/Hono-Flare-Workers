import { Hono } from 'hono'
import route from './api/v1/routes'
import { middleware } from './middlewares/middleware';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.route('/route', route);

export default app;
