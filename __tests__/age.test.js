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
//------------------------------------------------------

describe('findMercuryAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in mercury years', () => {
  expect(testAge.findMercuryAge()).toEqual(1839.6)
  })
});
//------------------------------------------

describe('findVenusAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in venus years', () => {
  expect(testAge.findVenusAge()).toEqual(4752.3)
  })
});
//------------------------------------

describe('findMarsAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in Mars years', () => {
  expect(testAge.findMarsAge()).toEqual(14410)
  })
});