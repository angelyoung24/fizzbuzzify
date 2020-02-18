// [12, 55, 25, 14]
// [fizz, buzz, buzz, ""]

function fizzbuzzify (input) {
    if (input % 3 === 0 && input % 5 === 0 ) {
        return "fizzbuzz"
    }
    if (input % 3 === 0 ) {
        return "fizz"
    }
    if (input % 5 === 0 ) {
        return "buzz"
    }
        return "neither"
}

exports.fizzbuzzify = fizzbuzzify;