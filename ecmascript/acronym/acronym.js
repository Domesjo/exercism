class Acronyms {

  parse(shortHand) {
    if(shortHand.match(/.*:/)) return shortHand.match(/.*:/).join('').replace(':', '');
    return shortHand.match(/ .|[A-Z]|-./g).join('').toUpperCase().replace(/ |-/g, '');
  }

}

const acronymsInstance = new Acronyms;

module.exports = acronymsInstance;
