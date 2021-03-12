import Age from './../src/age.js';
describe('Age', () => {
  const testAge = new Age ("June 9th, 1999")
  test('it should create a new Age', () => {
    expect(testAge).toEqual(new Age("June 9th, 1999"));
  });
});