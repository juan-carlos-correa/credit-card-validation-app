# Credit Card Number Validation App

This is a simple credit card number validation app that checks if a credit card number is valid or not. It uses the Luhn algorithm to validate the credit card number.

> [!WARNING]
> This is only for educational purposes and should not be used in production. For secure credit card validation, use a certified payment gateway.

## Features

- Validates credit card numbers using the Luhn algorithm
- Simple and easy to use
- Responsive design
- Fast and lightweight
- Backend and frontend tests
- Error handling
- Environment variables
- Prettier and ESLint
- TailwindCSS for styling
- Vite for frontend development
- Express.js for the backend

## Tech stack

- Node.js
- Express.js
- Supertest
- React
- TailwindCSS
- Vite
- Vitest
- React Testing Library
- MSW

## Installation

1. Clone the repository
2. Run the following command to install the required backend dependencies:

```bash
cd backend
npm ci
```

3. Run the following command to install the required frontend dependencies:

```bash
cd frontend
npm ci
```

> [!NOTE]
> npm ci installs the dependencies from package-lock.json

3. Create a `.env` file in the `backend` directory and add the following environment variables:

```env
cp .env.example .env
```

The .env file contains environment variables needed for backend configuration.

## Usage

1. Run the following command to start the backend server:

```bash
cd backend
npm run dev
```

2. Run the following command to start the frontend server:

```bash
cd frontend
npm start
```

3. Open your browser and go to `http://localhost:5173` to view the app.

4. Enter a credit card number and click the `Validate` button to check if the credit card number is valid or not.

5. Enjoy!

## Tests

To run the tests, run the following command:

```bash
cd backend
npm test
```

And to run the frontend tests, run the following command:

```bash
cd frontend
npm test
```

Notes
This is a basic implementation, and there are many ways to improve it. Here are some ideas:

- Caching: You could add a cache to store the validated credit card numbers to reduce the number of requests to the server. For example, using a library like node-cache to store validated credit card numbers in memory could improve performance.

- Additional Validation Rules: Beyond the Luhn algorithm, you could add more rules to validate the credit card number, such as checking the length or card type (e.g., Visa, MasterCard, American Express).

- Error Handling in the Frontend: Consider adding a React error boundary to handle errors gracefully in the frontend.

There are always areas for improvement; there are more tasks than lifetime!
