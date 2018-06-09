const HORIZONTAL = 'HORIZONTAL';
const VERTICAL = 'VERTICAL';

class WordSearch {
    static getCords(rowNum, {index, reversed}, word, type = '') {
        if (type === VERTICAL) {
            return {
                end: [
                    (reversed ? rowNum - (word.length + 2) : rowNum + 1),
                    (reversed ? rowNum + 1 : index + word.length),
                ],
                start: [
                    (reversed ? index : index + 1),
                    rowNum + 1,
                ],
            };
        }

        return {
            end: [
                rowNum + 1,
                (reversed ? word.length - (index + 1) : index + word.length),
            ],
            start: [
                rowNum + 1,
                (reversed ? index + 2 : index + 1),
            ],
        };
    }

    static analyzeWord(row, word) {
        const regex = new RegExp(word);
        const reversedRow = row.split('').reverse().join('').match(regex);
        if (reversedRow) {
            return Object.assign({}, reversedRow, {reversed: true});
        }
        return row.match(regex);
    }

    constructor(grid) {
        this.grid = grid;
        this.gridVerticalLength = grid.length;
        this.hits = {};
        this.results = {};
    }

    initiateSearch(word) {
        this.searchVertical(word);
        this.searchHorizontal(word);
        this.results[word] = this.hits[word];
    }

    searchVertical(word) {
        for (let VerticalRowindex = 0; VerticalRowindex < this.gridVerticalLength; VerticalRowindex++) {
            let verticalWord = '';
            this.grid.forEach((row) => {
                verticalWord += row[VerticalRowindex];
            });
            const match = WordSearch.analyzeWord(verticalWord, word);
            if (match) {
                this.hits[word] = WordSearch.getCords(VerticalRowindex, match, word, VERTICAL);
            }
        }
    }

    searchHorizontal(word) {
        this.grid.forEach((row, rowNum) => {
            const match = WordSearch.analyzeWord(row, word);
            if (match) {
                this.hits[word] = WordSearch.getCords(rowNum, match, word);
            }
        });
    }

    find(words) {
        words.forEach(word => this.initiateSearch(word));

        return this.results;
    }
}

export default WordSearch;
