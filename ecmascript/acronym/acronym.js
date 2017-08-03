class Acronyms {

  parse(shortHand) {
    return shortHand.match(/[A-Z]/g).join('');
  }

}

const acronymsInstance = new Acronyms;

module.exports = acronymsInstance;
