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

let doe = new Promise((resolve, reject) => {
    let val = false
    console.log('start')
    if (val) resolve('done')
    else reject('error')
})
async function dor() {
    try {
        await doe
    } catch (e) {
        console.log(e)
    }
}
dor()

let arr = [1, 2, 3, 4]

let val = arr.slice(2, 1)
console.log(arr)
console.log(val)

let on = { key: 1 }
Object.defineProperty(on, 'key', {
    get: function () {
        return this.key
    },
    set: function (valz) {
        this.key = valz + 1
    },
})
on.key = 2
console.log(on.key)
