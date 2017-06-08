// The test requires a constructor function and will create a new robot with a new serial number of 2 Letters and 3 integers.

// What every instance of the robot has is on the class so construcotr this.getName() => Generates the random name. Reset gives each instance of an function to generate a new name for the specific robot, The cool thing is get name() means that when you do let robot.name it is only a getter function so if you would wanna alter the name you would have to alter this._z

export default class Robot {
  constructor(){
    this._z = this.getName();
  }

  get name() {
    return this._z;
  }

  reset() {
    this._z = this.getName();
  }
}
// The Robot prototype has serial so the Robot.prototype knows how many Robots it has created and the name of each robot. to prevent it from creating duplicates
Robot.prototype.serial = [];

//generateName generates the name with a default length of 5 of a parameter, but It will always start with 2 numbers and x Letters
Robot.prototype.generateName = function(length=5) {
  let name = '';
  while(length--) name += length < 3 ? this.randomInteger() : this.randomLetter();
  return name;
}

// getName runs the function and assigns name to a let then checks if the name is in the Robot.prototype.serial so it breaks when the while runs false and sets the name. and pushes the name to the serial AFTER the while loop.
Robot.prototype.getName = function() {
  let name = this.generateName();
  while(this.serial.includes(name)) {
    name = this.generateName();
  }
  this.serial.push(name);
  return name;
}
// Generates a random letter
Robot.prototype.randomLetter = function(){
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)];
}
//Generates a random integer
Robot.prototype.randomInteger = function(){
  return Math.floor(Math.random()*10).toString();
}
