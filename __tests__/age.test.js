import Age from './../src/age.js';
describe('Age', () => {
  let testAge;
  beforeEach(() => {
    testAge = new Age ("June 9th, 1999")
  });

  test('it should create a new Age', () => {
    expect(testAge).toEqual(new Age("June 9th, 1999"));
  });
  test('it will convert testAge to earth years', () => {
    expect(testAge).toEqual(21.9)
  })
});