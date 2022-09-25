# NodeJs - Service Template

Basic template with Nodejs owned by [beenjii14](https://github.com/beenjii14)

Structured and configured packages ready to put logic into your project

## Configured packages

- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [Mongoose](https://mongoosejs.com/)
- [Husky](https://typicode.github.io/husky/#/)
- [Winston](https://www.npmjs.com/package/winston)
- [Cors](https://www.npmjs.com/package/cors)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Structure

This is the directory structure of the application.

```txt
  ├── .husky     -> Hooks of husky
  ├── .__tests__ -> Tests of the application
  ├── config     -> Variables of environment
  ├── src        -> Source code
  │   ├── index.js -> Entry point of the application
  │   ├── utils    -> Utils of the application
```

## Prerequisites

- Install Node.js from [here](http://nodejs.org) >=16.14.0
- Install PNPM from [here](https://pnpm.io/es/installation)
- Install Git from [here](https://git-scm.com/downloads)
- Have shell or command line (If you use Mac and Linux, you have a terminal pre-installed, if you are using windows you can use [git bash](https://git-scm.com/downloads))

## Development

```bash
# Clone the repo
git clone https://github.com/beenjii14/nodejs-service-template.git

# Install dependencies
pnpm install

# Run the app
pnpm dev
```

## Production

```bash
# Clone the repo
git clone https://github.com/beenjii14/nodejs-service-template.git

# Install dependencies
pnpm install

# Run the app
pnpm start
```

## Extra commands

Run the unit tests

```bash
# Run the unit tests with coverage
pnpm test

# Run the unit tests watch mode
pnpm test:watch
```

Run the eslint

```bash
pnpm lint
```

## [License MIT](LICENSE)
