# The Backend

Welcome to the backend of the monorepo. Here, I'll outline the basic parts of the backend and how to extend or customize it to your liking. 

The entry point for the backend is at `/backend/src/index.ts`.

The database is handled using the `sequelize` library and the interface is instantiated in `/src/database.ts`.

`/src/models` holds all the database model definitions. It has it's own README.

`/src/routes` holds all the routing information for the HTTP server. It has its own README.