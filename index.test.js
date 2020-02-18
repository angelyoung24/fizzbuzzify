const { fizzbuzzify } = require("./index.js")

describe ("fizzbuzzify", () => { 
    it ("if it divides by 3 and 5 then it returns fizzbuzz", () => {
        expect(fizzbuzzify(15)).toBe("fizzbuzz")
    })
    it ("if it divides by 3 then it returns fizz", () => {
        expect(fizzbuzzify(12)).toBe("fizz")
    })
    it ("if it divides by 5 then it returns buzz", () => {
        expect(fizzbuzzify(25)).toBe("buzz")
    })
    it ("if it does not divide by 3 or 5 it returns neither", () => {
        expect(fizzbuzzify(14)).toBe("neither")
    })
})  