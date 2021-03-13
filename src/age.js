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
  
}
