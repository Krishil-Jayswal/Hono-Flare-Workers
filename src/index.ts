import { Hono } from 'hono'
import route from './api/v1/routes'
import { middleware } from './middlewares/middleware';

// Binding of DATABASE_URL for type satety.
const app = new Hono<{
  Bindings: {
    DATABASE_UR: string
  }
}>();

// Home page
app.get('/', (c) => {
  // After generating the client, you can access it here by using the code mentioned in Readme.
  return c.text('Hello Hono!')
});

// Routing requests.
app.route('/route', route);

export default app;
