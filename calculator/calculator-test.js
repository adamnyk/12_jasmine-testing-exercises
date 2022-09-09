
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 20000, years: 15, rate: 6})).toEqual('168.77');
  expect(calculateMonthlyPayment({amount: 100000, years: 7, rate: 99})).toEqual('8260.59');
  expect(calculateMonthlyPayment({amount: 50000, years: 99, rate: 2})).toEqual('96.71');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 12,
    rate: 6,
  }
  expect(calculateMonthlyPayment(values)).toEqual('97.59');
});

/// etc
