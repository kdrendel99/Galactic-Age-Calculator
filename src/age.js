export default class Age {
  constructor(years) {
    this.years = years;
  }
findEarthAge(){
  let earthAge = this.years * 365
  return earthAge;
};
  
}
