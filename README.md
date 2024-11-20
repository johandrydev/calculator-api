# Calculator API

This is a simple calculator API built with Express and TypeScript.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Getting Started

### Install Dependencies

First, install the project dependencies:

```sh
npm install
```

### Running the App

To start the application, run:

```sh
npm start
```

### Running Tests

To run the tests, use:

```sh
npm run test
```

### Building the App

To build the application, execute:

```sh
npm run build
```
This will compile the TypeScript code into JavaScript and output it to the `dist` directory.

## API Endpoints

### Calculate

- **URL:** `/calculate`
- **Method:** `POST`
- **Request Body:**
  - `expression`: The expression to calculate (e.g. `2 + 2`).

  ```json
  {
    "expression": "10 * (2 + 5) * 10"
  }
  ```
- **Response:**
  - `result`: The result of the calculation.

  ```json
  {
    "result": 700
  }
  ```


