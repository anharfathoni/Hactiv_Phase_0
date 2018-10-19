//[Exercises 11 (Auto)] Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    var check = true
    var beda1
    var beda2

    if (check === true) {
        for (var i = 0; i < arr.length - 2; i++) {
            beda1 = arr[i + 1] - arr[i]
            beda2 = arr[i + 2] - arr[i + 1]

            if (beda1 !== beda2) {
                check = false
            }
        }
    }
    return check
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 5, 9, 13, 17, 21])); // true