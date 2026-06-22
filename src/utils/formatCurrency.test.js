const { formatCurrency } = require('./formatCurrency');

test('formats currency correctly', () => {
  // WRONG — toBe fails on objects, should use toEqual
  // expect(formatCurrency(10.005, 'USD')).toBe({ amount: 10.01, currency: 'USD' });  
  // Fixed matcher: objects should be compared using toEqual
  expect(formatCurrency(10.005, 'USD')).toEqual({ amount: 10.01, currency: 'USD' });
});
