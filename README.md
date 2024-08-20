# Assessment Task

To run the project follow the instructions below.

## Backend Installation

To set up the server

```bash
cd backend && npm i
touch .env
```

Add the following to the **`.env`** file:

```
PORT=8000
API_ENDPOINT=https://data--insert.upscope.io/status?stats=1
```

Then finally

```bash
npm start
```

then open a new terminal tab and run the following commands:

```bash
npm start
```

## Frontend Installation

To set up the client, open a new terminal tab and start with the following command:

```bash
cd frontend && npm i
touch .env
```

Add the following to the client **`.env`** file:

```
REACT_APP_API_ENDPOINT=http://localhost:8000/server
REACT_APP_API_ALL_ENDPOINT=http://localhost:8000/all
```

Then finally

```bash
npm start
```
