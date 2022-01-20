/* eslint-disable quotes */
test('console.log the text "it works!"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  /* eslint-disable no-console */
  console.log('it works!');

  expect(consoleSpy).toHaveBeenCalledWith('it works!');
});
