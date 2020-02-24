// [12, 55, 25, 14]
// [fizz, buzz, buzz, ""]

function fizzbuzzifynumber (input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "fizzbuzz";
  }
  if (input % 3 === 0) {
    return "fizz";
  }
  if (input % 5 === 0) {
    return "buzz";
  }
  return input
}

function fizzbuzzify (array) {
    // array.map
    // const numbers = [3, 5, 15, 14]
    // return numbers.map
    // it works for arrays
    if (!Array.isArray(array)) {
      return fizzbuzzifynumber(array)
    }
    if (array.length === 0) {
      throw new Error("you cannot use an empty array")
    }
    return array.map(fizzbuzzifynumber)
}

exports.fizzbuzzify = fizzbuzzify;
