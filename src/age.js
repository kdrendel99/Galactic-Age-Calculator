export default class Age {
  constructor(birthday){
    this.birthday = birthday;
  }


getEarthAge() {
  return (Date.now()-this.dob)/3.13;
}


}