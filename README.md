# cypress-studies
#### _This project was made to study Cypress Framework, following the qaXperience course._

## Cypress instalation
Follow the steps bellow to install the cypress framework:

```sh
mkdir <workspace>
cd <workspace>
yarn init
yarn add cypress@12.2.0 -D
yarn cypress open
```

In case of yarn commands does not work, you can use npm commands instead:

```sh
npm init
npm i cypress@12.2.0 --save-dev
npx cypress open
```
## Web application instalation
##### To study the cypress framework, I have used a application called Mark L. That aplication is available in this repository, and you could follow the steps below to run it on your machine.

Initializing API

Go to application/api

```sh
yarn install #to install the api requirements
yarn db:init #initializing database
yarn dev #initializing api
```

In case of yarn commands does not work, you can use npm commands instead:

```sh
npm install
npm run db:init
npm run dev
```
Initializing frontend 

Go to application/web

```sh
yarn install #to install the web requirements
yarn dev #initializing web
```

In case of yarn commands does not work, you can use npm commands instead:

```sh
npm install
npm run dev
```

Running the tests

Go to the main directory folder

```sh
yarn cypress run
or
npx cypress run
```
