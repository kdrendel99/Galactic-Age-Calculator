export default class Age {
  constructor(dob, date){
    this.dob = new Date(dob)
    this.date = date;
  }

  getEarthAge() {
    return (Date.now()-this.dob)/3.154e+10;
  }
}