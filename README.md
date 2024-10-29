### Hono-Flare Workers
A boilerplate code for setting up a folder structure in hono and use the cloudflare workers for deployment. Using prisma as ORM and prisma accelerate service for connection pooling.

First you should have these two url's handy.
1. postgres database url:
Get a postgres database url ready from service providers like neon, aiven, etc.
2. prisma accelerate url:
As we are using prisma as ORM, we should have a prisma accelerate url for connection pooling. We can get this from https://www.prisma.io/. Signup, create new project and get the accelerate url from here.

Use the following commands to setup the repo locally.
1. Clone the repository locally:
``` 
	git clone https://github.com/Krishil-Jayswal/Hono-Flare-Workers.git 
```
2. Navigate to folder:
``` 
	cd Hono-Flare-Workers 
``` 
3. Install the dependencies:
 ``` 
	 npm install 
 ```
4. Change the database url in (.env) file:
``` 
	DATABASE_URL = "Your Database URL" 
```
5. Change the database url in (wrangler.toml) file:
``` 
	DATABASE_URL = "Your prisma accelerate url" 
```
6. Migrate the database:
``` 
	npx prisma migrate dev --name migration_name 
```
7. Generate the client:
``` 
	npx prisma generate --no-engine 
``` 
8. Access the client inside routes:
``` 
import { PrismaClient } from  '@prisma/client/edge'; 
import { withAccelerate } from  '@prisma/extension-accelerate';
app.get('/', (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate()); 
	return c.text('Hello Hono');
})
```
9. Start the server locally:
``` 
	npm run dev 
```
Visit the localhost url which is coming up in console.
10. Deployment:
Build your project and finally deploy it on cloudflare workers.
``` 
	npm run deploy 
``` 