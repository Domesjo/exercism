class List {
    constructor(initalList = []) {
        this.values = initalList;
    }

    append(list = []) {
        this.values = [...this.values, ...list.values];
        return this;
    }

    concat(value) {
        return this.append(value);
    }

    filter(method) {
        const filteredValues = [];
        for (let i = 0; i <= this.length(); i++) {
            const activeValue = this.values[i];
            if (method(activeValue)) {
                filteredValues.push(activeValue);
            }
        }

        this.values = filteredValues;
        return this;
    }

    length(index = 0) {
        if (this.values[index]) {
            const nextIndex = index + 1;
            return this.length(nextIndex);
        }
        return index;
    }

    map(method) {
        const newValues = [];
        for (let i = 0; i < this.length(); i++) {
            const activeValue = this.values[i];
            newValues.push(method(activeValue));
        }

        this.values = newValues;
        return this;
    }

    foldl(method, initalValue = null) {
        let reduced = initalValue;
        for (let i = 0; i < this.length(); i++) {
            reduced = method(reduced, this.values[i]);
        }

        return reduced;
    }

    foldr(method, initalValue = null) {
        let reduced = initalValue;
        for (let i = this.length() - 1; i >= 0; i--) {
            reduced = method(reduced, this.values[i]);
        }

        return reduced;
    }

    reverse() {
        const copy = []
        for (let i = this.length() - 1; i >= 0; i--) {
            copy[this.length() - i - 1] = this.values[i];
        }
        this.values = copy;
        return this;
    }
}

export default List;