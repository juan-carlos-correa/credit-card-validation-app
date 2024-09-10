/**
 * Validates a credit card number using the Luhn algorithm.
 * More info: https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param creditCardNumber
 * @returns boolean
 */
export const validateCreditCardNumber = (creditCardNumber: string): boolean => {
  // starting from the right
  const reversedDigits = creditCardNumber
    .split("")
    .reverse()
    .map((digit) => parseInt(digit, 10));

  const calculate = (digit: number, index: number) => {
    const isEven = index % 2 === 0;
    // double every second digit only
    if (isEven) {
      return digit;
    }

    const doubledDigit = digit * 2;

    // if the doubled digit is greater than 9, subtract 9
    if (doubledDigit < 10) {
      return doubledDigit;
    }

    return doubledDigit - 9;
  };

  const doubled = reversedDigits.map(calculate);

  // if the sum of all digits is divisible by 10, it's a valid credit card number
  const addition = (acc: number, number: number) => acc + number;
  const sum = doubled.reduce(addition, 0);
  return sum % 10 === 0;
};
