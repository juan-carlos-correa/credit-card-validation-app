# Credit Card Number Validation App

This is a simple credit card number validation app that checks if a credit card number is valid or not. It uses the Luhn algorithm to validate the credit card number.

> [!WARNING]
> This is only for educational purposes and should not be used in production. For secure credit card validation, use a certified payment gateway.

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

# Notes

This is a basic implementation, and there are many ways to improve it.

For example, you could add a cache to store the credit card numbers that have been validated to reduce the number of requests to the server.

For that, you could use a library like `node-cache` to store the credit card numbers in memory.

You could also add more validation rules to check if the credit card number is valid, such as checking the length of the credit card number or the card type.

Another improvement is adding a React erro catch boundary to handle errors in the frontend.

There are always areas for improvement, there are more tasks than lifetime.
