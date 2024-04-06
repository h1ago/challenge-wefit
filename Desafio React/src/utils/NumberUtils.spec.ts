import { formatPrice } from './NumberUtils';

describe('formatPrice', () => {
  it('should correctly format the price to Brazilian currency format (BRL)', () => {
    const prices = [
      { input: 100, output: 'R$\xa0100,00' },
      { input: 1500, output: 'R$\xa01.500,00' },
      { input: 99.99, output: 'R$\xa099,99' },
      { input: 1234567.89, output: 'R$\xa01.234.567,89' },
    ];

    prices.forEach(({ input, output }) => {
      expect(formatPrice(input)).toEqual(output);
    });
  });
});
