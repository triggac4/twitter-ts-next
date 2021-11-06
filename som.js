console.log(/cat/.test('concatenate'))
// → true
console.log(/\bcat\b/.exec('con cat enate'))
// → false
class tryo {
    #protect
    constructor(value) {
        this.#protect = value
    }
    get protected() {
        return this.#protect
    }
    set protected(val) {
        this.#protect = val
    }

    static value = 23
}

class tryoext extends tryo {
    constructor(val) {
        super(val)
    }
}

let inst = new tryoext(34)
inst.protected = 46
console.log(tryoext.value)
