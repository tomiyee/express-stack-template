# Express Full-Stack Template

This GitHub repository will be a very simple fullstack template that is intended to be a jumping off point with much of the boiler-plate handled ahead of time for any small side projects.

## Application Overview

This template will have a very simple fullstack application to demonstrate a number of features across the stack and how to get them working together. 

The specific application allows users users to enter a username and increment or decrement an arbitrary number associated with that username. 

## Development

To begin development, make sure that you have the following already installed:
- pnpm
- Docker (for the database)

## Deployment

To deploy the full-stack, follow these instructions:

1. TBD
2. TBD

# Design Decisions and Reasoning

In this section, I describe the different libraries and design decisions I chose for different parts of the stack and why I chose them.

## 1. Cross-Stack Decisions

Before any development, I had to make some significant decisions about what technologies to employ across the stack and for managing infrastructure.

### 1.1 Programming Language - Typescript

The first decision was programming language. For this stack, I chose Typescript over alternatives like Python or Rust for a few reasons: its popularity among developers (according to [this 2023 Stack Overflow survey](https://survey.stackoverflow.co/2023/#section-admired-and-desired-programming-scripting-and-markup-languages)), its popularity for both backend and frontend applications, and its more settled and matured frameworks for each part of the stack. 

I've personally used and disliked Python frontend frameworks, finding it less intuitive than JSX frameworks like React or Vue. As for Rust, there are still a number of competing Frontend and Backend frameworks still fighting for marketshare. As of writing this, this [Rust Framework comparison](https://github.com/flosse/rust-web-framework-comparison?tab=readme-ov-file) claims that `equi` and `yew` are some of the most popular frameworks for Rust. As these technologies mature, I may decide to make a full-stack project in RUst for fun. 

### 1.2 ESLint and Prettier

To supplement the development process, I added a Typescript linter `ESLint` and the Javascript styling packages `Prettier`. These two packages will make sure that any developers that cooperate on this project spend less time debugging or debating how to style their code and more time writing working software in any part of the stack.  

### 1.3 Github Actions

Additionally, there are a minimal set of GitHub actions that will run to ensure any incoming code satisfies the Prettier and ESLint 

When making use of this template, be sure to:
1. Protect the `main` branch
2. Require GitHub actions be passing before allowing merge

### 1.4 Docker

To simplify setup for the database, I've decided to take advantage of Docker and its simplicity when setting up a development instance of the database. The focus of this project is not on the specific database, and by taking advantage of Docker, I can minimize the impact a change in database would have on this project. 

## 2. Frontend - React and Vite.js

For the frontend application, I chose to implement it in React for its large presence in current Frontend software development and thus improve its long-term maintainability. The large React community also offers a wide range of libraries for further customization of the template.

For the React Framework, I chose Vite because of its flexibility and unopinionated nature, particularly when compared to Next.js. Because I imagine this template being used for small side-projects or applications, I don't believe there is much gain for the added complexity of the Server-Side Rendering (SSR) offered by Next.js.

### 2.1 UI Framework - Material UI

For quick development of the UI, I am choosing Material UI for its long-term support, large community, wide range of icons, and top-tier documentation.

### 2.2 State Management - Zustand

For statemanagement, I've chosen to implement the template with Zustand for its reduced boiler plate, its larger team of developers, its demonstrated history of robustness, and its settled API.

I am looking for something more flexible than Redux and with less boilerplate. My previous solution would have been Recoil, but it has not seen significant active development or any roadmap for a significant number of years. Jotai is a natural alternative to Recoil for its puprosefully similar API and active response to their community. However, Jotai is much younger than Zustand and has a smaller team of developers.


## 3. Backend - Express

To handle the backend, I decided to implement an Express.js node server. This should be sufficient for most full-stack applications. 

It is also convenient to take advantage of Web-Sockets using `socket.io` with not too much extra effort. Do note the additional steps to ensure type-safety between server and client.

### 3.1 Database - Docker and PostgreSQL

For persistent data storage, I chose the relational database `PostgreSQL`.

Firstly, I'll admit that the choice of database is mostly arbitrary. The ideal type of database will vary from application to application. I chose relational databses mostly because I wager that for most applications, the additional flexibility of non-relational databases like MongoDB is not very necessary. For applications where non-relational databases are a better fit, changing the Databse in this template should not be too involved.

Secondly, the choice of PostgreSQL over other relational databases is also mostly arbitrary. Because I'll be using a database management library, `Sequelize` (mentioned in the following section), the choice of specific database will not strongly impact the code. My decision was mainly to its presence in professional development according to [this 2023 Stack Overflow survey](https://survey.stackoverflow.co/2023/#section-admired-and-desired-programming-scripting-and-markup-languages) and my familiarity with tools for managing PostgreSQL databases such as PGAdmin4.

### 3.2 Database Management - Sequelize

For managing the database from the Express backend, this template uses `Sequelize`. This abstracts away the queries for performing CRUD operations into convenent objects and methods that are Typescript friendly.