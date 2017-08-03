class Acronyms {

  parse(shortHand) {
    //.*:
    return shortHand.match(/ .|[A-Z]/g).join('').toUpperCase().replace(/ /g, '');
  }

}

const acronymsInstance = new Acronyms;

module.exports = acronymsInstance;
