class Isogram {
    static wordToLetters(word) {
        return word.split('').map(letter => letter.toLowerCase())
    }

    constructor(word) {
        this.asciiRegex = /[a-záéíóú]/gi;
        this.usedLetters = [];
        this.hasDupes = false;

        this.letters = Isogram.wordToLetters(word);
        this.analyzeWord();
    }

    isIsogram() {
        return !this.hasDupes;
    }

    analyzeWord() {
        this.letters.forEach((letter) => {
            if (this.isAsciiLetter(letter) && !this.isDefinedEarlier(letter)) {
                this.usedLetters.push(letter);
            } else if (this.isAsciiLetter(letter)) {
                this.hasDupes = true;
            }
        });
    }

    isAsciiLetter(letter) {
        return letter.match(new RegExp(this.asciiRegex))
    }

    isDefinedEarlier(letter) {
        return this.usedLetters.includes(letter)
    }
}

export default Isogram;
