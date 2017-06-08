export default class SpaceAge{
  constructor(timeInSeconds){
    this.seconds = timeInSeconds;
    this.yearInSeconds = 31557600;
  }
  onEarth(){
    this.onEarth = parseFloat((this.seconds/this.yearInSeconds).toFixed(2));
    return this.onEarth;
  }
  onMercury(){
    return this.calculateAge(0.2408467);
  }

  onVenus(){
    return this.calculateAge(0.61519726);
  }

  onMars(){
    return this.calculateAge(1.8808158);
  }

  onSaturn(){
    return this.calculateUp(29.447498);
  }

  onJupiter(){
    return this.calculateUp(11.862615);
  }

  onUranus(){
    return this.calculateUp(84.016846);
  }

  onNeptune(){
    return this.calculateUp(164.79132);
  }

  calculateUp(num){
    return parseFloat((this.onEarth/num).toFixed(2));
  }

  calculateAge(num){
    return Math.floor(parseFloat((this.onEarth/num)) * 100)/100;
  }
}
