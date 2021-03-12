import Age from './../src/age.js';
describe('Age', () => {
  const testAge = new Age ("06091999")
  test('it should create a new Age', () => {
    expect(testAge).toEqual(new Age("06091999"));
  });
});