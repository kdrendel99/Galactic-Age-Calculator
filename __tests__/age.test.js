import Age from './../src/age.js'

describe('findEarthAge', () => {
  let testAge;
  
  beforeEach(() => {
    testAge = new Age('21');
  });

  test('get testAge age in earth years', () => {
    expect(testAge.findEarthAge()).toEqual(21)
  });
});
//------------------------------------------------------

describe('findMercuryAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in mercury years', () => {
  expect(testAge.findMercuryAge()).toEqual(5.04)
  })
});
//------------------------------------------

describe('findVenusAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in venus years', () => {
  expect(testAge.findVenusAge()).toEqual(13.02)
  })
});
//------------------------------------

describe('findMarsAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in Mars years', () => {
  expect(testAge.findMarsAge()).toEqual(39.48)
  })
});
//-------------------------------------
describe('findJupiterAge', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21');
  })
  test('get testAge in Jupiter years', () => {
  expect(testAge.findJupiterAge()).toEqual(249.06)
  })
});
//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------
describe('findEarthExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21','76');
  })
  test('calculate user life expectancy', () => {
  expect(testAge.earthExpectancy()).toEqual('76')
  })
});
//------------------------------------
describe('findMercuryExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21','76');
  })
  test('calculate user life expectancy for Mercury', () => {
  expect(testAge.mercuryExpectancy().toFixed(2)).toEqual('13.20')
  })
});
//-------------------------------------
describe('findVenusExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21','76');
  })
  test('calculate user life expectancy for Venus', () => {
  expect(testAge.venusExpectancy().toFixed(2)).toEqual('34.10')
  })
});
//-------------------------------------
describe('findMarsExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21','76');
  })
  test('calculate user life expectancy for Mars', () => {
  expect(testAge.marsExpectancy().toFixed(2)).toEqual('103.40')
  })
});
//-------------------------------------
describe('findJupiterExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('21','76');
  })
  test('calculate user life expectancy for Jupiter', () => {
  expect(testAge.jupiterExpectancy().toFixed(2)).toEqual('652.30')
  })
});
//------------------------------------
describe('findEarthExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('77','76');
  })
  test('calculate user life expectancy for Mercury', () => {
  expect(testAge.earthExpectancy().toFixed(2)).toEqual('1.00')
  })
});
//------------------------------------
describe('findMercuryExpectancy', () => {
  let testAge;

  beforeEach(() => {
    testAge = new Age('77','76');
  })
  test('calculate user life expectancy for Mercury', () => {
  expect(testAge.earthExpectancy().toFixed(2)).toEqual('.24')
  })
});