class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            throw new Error("Cannot divide by zero");
        }
        return this;
    }

    getResult() {
        return this.result;
    }
}
