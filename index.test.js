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
        x = 14
        expect(fizzbuzzify(x)).toBe(x)
    })
    it ("it works for arrays", () => {
        let original = [3, 5, 15, 14]
        let expected = ["fizz", "buzz", "fizzbuzz", 14]
        expect(fizzbuzzify(original)).toEqual(expected)
    })
    it ("throws an error if you use an empty array", () => {
        expect(() => fizzbuzzify([])).toThrow("you cannot use an empty array")
    })
})  