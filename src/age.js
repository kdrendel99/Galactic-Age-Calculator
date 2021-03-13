export default class Age {
  constructor(years,expectancy) {
    this.years = years;
    this.expectancy = expectancy;
  }
findEarthAge(){
  let earthAge = this.years * 365
  return earthAge;
};
findMercuryAge(){
  let mercuryAge = this.years * 87.6
  return mercuryAge;
};
findVenusAge(){
  let venusAge = this.years * 226.3
  return venusAge;
};
findMarsAge(){
  let marsAge = this.years * 686.2
  return marsAge;
};
findJupiterAge(){
  let jupiterAge = this.years * 4328.9
  return jupiterAge;
};
earthExpectancy(){
  return this.expectancy;
}
mercuryExpectancy(){
  let mercExpect = this.expectancy/.24.toFixed(2);
  let mercExpectLeft = mercExpect - this.expectancy
  return mercExpectLeft;
}
venusExpectancy(){
  let venusExpect = this.expectancy/.62.toFixed(2);
  let venusExpectLeft = venusExpect - this.expectancy
  return venusExpectLeft;
}
marsExpectancy(){
  let marsExpect = this.expectancy/1.88.toFixed(2);
  let marsExpectLeft = this.expectancy - marsExpect;
  return marsExpectLeft;
}
jupiterExpectancy(){
  let jupiterExpect = this.expectancy/11.86.toFixed(2);
  let jupiterExpectLeft = this.expectancy - jupiterExpect;
  return jupiterExpectLeft;
}
}
