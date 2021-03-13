export default class Age {
  constructor(years) {
    this.years = years;
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
  
}
