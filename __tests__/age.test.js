import Age from './../src/age.js'

describe('findEarthAge', () => {
  let testAge;
  
  beforeEach(() => {
    testAge = new Age('21');
  });

  test('get testAge age in earth years', () => {
    expect(testAge.findEarthAge()).toEqual(7665)
  });
});