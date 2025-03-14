# Minimal next.js project setup using React Server Components, Prisma, PostgreSql, Playwright, Vitest, Helm, k8s and Github Actions

Wanted to checkout how to setup everything and maybe it is useful for someone... This is a minimal app that lets you send messages and saves them in a database.

## Local dev

Run `docker compose up` to start PostgreSql.

Put something like 

`DATABASE_URL="postgresql://postgres:password@127.0.0.1:5432/postgres?schema=public"` 

in you `.env` and create `.env.test` next to it with 

`export DATABASE_URL="postgresql://postgres:password@127.0.0.1:5432/postgres_test?schema=public"` 

to use a different db during testing.

You should then be able to setup the database schema:

`npx prisma db push`

Then you can start the app:

`npm run dev`

## Running tests

To run the example Playwright tests run

`npm run e2e`

It starts the app on port 3001 and resets the test db before running the tests.

To run the integration tests with vitest use

`npm run test`

This will also reset the database and run the tests.

## K8s

To build the container and use it locally using minikube you need to run 

`eval $(minikube docker-env)`

in your shell before building:

`docker build -t frontend:1.09 ./`

Then you should be able to install the helm chart

`helm install helmkube ./helm`

This will run an init container to migrate the prisma schema before starting the new app container.

## CI

The playwright and integration tests also run on the Github CI, check the `.github/workflows` folder!