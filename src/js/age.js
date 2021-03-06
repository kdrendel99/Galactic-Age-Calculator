export default class Age {
  constructor(years, expectancy) {
    this.years = years;
    this.expectancy = expectancy;
  }
  findEarthAge() {
    let earthAge = this.years * 1;
    return earthAge;
  }
  findMercuryAge() {
    let mercuryAge = this.years * .24.toFixed(2);
    return mercuryAge;
  }
  findVenusAge() {
    let venusAge = this.years * .62.toFixed(2);
    return venusAge;
  }
  findMarsAge() {
    let marsAge = this.years * 1.88.toFixed(2);
    return marsAge;
  }
  findJupiterAge() {
    let jupiterAge = this.years * 11.86.toFixed(2);
    return jupiterAge;
  }
  //---------------------------------------------------
  //---------------------------------------------------
  earthExpectancy() {
    if (this.years > this.expectancy) {
      let outlived = this.years - this.expectancy;
      return outlived;
    }
    return this.expectancy;
  }
  mercuryExpectancy() {
    let earthYearsLeft = this.expectancy - this.years;
    let mercExpect = earthYearsLeft * .24.toFixed(2);
    if (this.years > this.expectancy) {
      let outlived = (this.years - this.expectancy) * .24;
      return outlived;
    }
    return mercExpect;
  }
  venusExpectancy() {
    let earthYearsLeft = this.expectancy - this.years;
    let venusExpect = earthYearsLeft * .62.toFixed(2);
    if (this.years > this.expectancy) {
      let outlived = (this.years - this.expectancy) * .62;
      return outlived;
    }
    return venusExpect;
  }
  marsExpectancy() {
    let earthYearsLeft = this.expectancy - this.years;
    let marsExpect = earthYearsLeft * 1.88.toFixed(2);
    if (this.years > this.expectancy) {
      let outlived = (this.years - this.expectancy) * 1.88;
      return outlived;
    }
    return marsExpect;
  }
  jupiterExpectancy() {
    let earthYearsLeft = this.expectancy - this.years;
    let jupiterExpect = earthYearsLeft * 11.86.toFixed(2);
    if (this.years > this.expectancy) {
      let outlived = (this.years - this.expectancy) * 11.86;
      return outlived;
    }
    return jupiterExpect;
  }
}