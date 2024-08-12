# Capstone Project

## Overview

This project is a Path Finder API designed to manage users, maps, obstacles, and waypoints. It calculates the optimal path considering various parameters, including obstacles and mandatory waypoints.

## Tools and Technologies

### Dependencies

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**
  - **Description**: A library for hashing and verifying passwords.
  - **Usage**: Utilized for securely hashing user passwords before storing them in the database. This enhances security by protecting sensitive user information.

- **[dotenv](https://www.npmjs.com/package/dotenv)**
  - **Description**: A module to load environment variables from a `.env` file into `process.env`.
  - **Usage**: Helps manage configuration settings and secrets such as database credentials and API keys in a centralized `.env` file, making it easier to configure different environments (development, testing, production).

- **[express](https://www.npmjs.com/package/express)**
  - **Description**: A minimal and flexible Node.js web application framework.
  - **Usage**: Serves as the foundation for building the API. It simplifies routing, middleware integration, and request/response handling.

- **[express-session](https://www.npmjs.com/package/express-session)**
  - **Description**: Middleware for managing sessions in Express applications.
  - **Usage**: Manages user sessions, allowing for persistent login states and tracking user-specific data across multiple requests.

- **[express-validator](https://www.npmjs.com/package/express-validator)**
  - **Description**: Middleware for validating and sanitizing user inputs in Express applications.
  - **Usage**: Ensures that user inputs meet specific criteria and are free from malicious content, enhancing the security and reliability of the application.

- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
  - **Description**: A library for creating and verifying JSON Web Tokens (JWTs).
  - **Usage**: Used for authentication and authorization. JWTs are employed to manage user sessions and ensure secure communication between clients and the server.

- **[mongoose](https://www.npmjs.com/package/mongoose)**
  - **Description**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
  - **Usage**: Provides a higher-level abstraction for interacting with MongoDB, including schema definitions, data validation, and query building.

- **[morgan](https://www.npmjs.com/package/morgan)**
  - **Description**: HTTP request logger middleware for Node.js.
  - **Usage**: Logs HTTP requests and responses, providing useful information for debugging and monitoring the application.

- **[passport](http://www.passportjs.org/)**
  - **Description**: Middleware for authentication in Node.js applications.
  - **Usage**: Provides a flexible authentication framework supporting various strategies, including username/password and JWT-based authentication.

- **[passport-jwt](https://www.npmjs.com/package/passport-jwt)**
  - **Description**: A Passport strategy for authenticating with JSON Web Tokens (JWTs).
  - **Usage**: Handles the extraction and verification of JWTs from requests, enabling secure access to protected routes.

- **[passport-local](https://www.npmjs.com/package/passport-local)**
  - **Description**: A Passport strategy for username and password authentication.
  - **Usage**: Allows users to authenticate using a traditional username and password combination.

- **[supertest](https://www.npmjs.com/package/supertest)**
  - **Description**: A testing library for HTTP assertions.
  - **Usage**: Facilitates the testing of HTTP endpoints by simulating requests and verifying responses, ensuring that the API behaves as expected.

### Development Dependencies

- **[jest](https://jestjs.io/)**
  - **Description**: A testing framework for JavaScript.
  - **Usage**: Provides a robust testing environment for writing and running unit tests. Jest's features include test runners, assertion libraries, and coverage reporting.

- **[jest-environment-node](https://www.npmjs.com/package/jest-environment-node)**
  - **Description**: Provides a Node.js environment for Jest tests.
  - **Usage**: Configures Jest to run tests in a Node.js environment, which is suitable for server-side code and API testing.

- **[babel-jest](https://www.npmjs.com/package/babel-jest)**
  - **Description**: A Jest transformer that enables Babel support in Jest.
  - **Usage**: Allows Jest to transpile code using Babel, enabling the use of modern JavaScript features and syntax in tests. (Note: This tool is mentioned for completeness but is not currently used in your setup.)

## Scripts

- **start**: Starts the application in watch mode with `node --watch ./src/index.js`. This mode automatically restarts the server on code changes.
- **test**: Runs the test suite with Jest and generates a coverage report `pnpm run test`. This command executes all test cases and provides insights into test coverage.

## Project Structure

Here is the directory structure of the `capstone` project:

capstone <br>
├── .vscode/ <br>
├── node_modules/  <br>
├── src/ <br>
│ ├── config/ <br>
│ │ ├── db.js <br>
│ │ └── passport.js <br>
│ ├── controllers/ <br>
│ │ ├── `_test_` <br>
│ │ │ └── user.controller.test.js <br>
│ │ ├── auth.controller.js <br>
│ │ ├── map.controller.js <br>
│ │ ├── obstacle.controller.js <br>
│ │ ├── route.controller.js <br>
│ │ ├── user.controller.js <br>
│ │ └── waypoint.controller.js <br>
│ ├── middlewares/ <br>
│ ├── models/ <br>
│ │ ├── map.model.js <br>
│ │ ├── obstacle.model.js <br>
│ │ ├── route.model.js <br>
│ │ ├── user.model.js <br>
│ │ └── waypoint.model.js <br>
│ ├── routes/ <br>
│ │ └── v1/ <br>
│ │ ├── auth.route.js <br>
│ │ ├── map.route.js <br>
│ │ ├── obstacle.route.js <br>
│ │ ├── route.route.js <br>
│ │ ├── user.route.js <br>
│ │ └── waypoint.route.js <br>
│ ├── services/ <br>
│ │ ├── map.service.js <br>
│ │ ├── obstacle.service.js <br>
│ │ ├── route.service.js <br>
│ │ ├── user.service.js <br>
│ │ └── waypoint.service.js <br>
│ ├── utils <br>
│ ├── app.js <br>
│ ├── aStar.js <br>
│ └── index.js <br>
├── .env <br>
├── .gitignore <br>
├── jest.config.js <br>
├── package.json <br>
└── pnpm-lock.yaml <br>




