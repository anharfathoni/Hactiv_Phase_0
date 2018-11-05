// function tentukanDeretAritmatika(arr) {
//     var beda1 = arr[1] - arr[0]
//     var beda2 = arr[2] - arr[1]
//     if (arr.length === 2) {
//         return true
//     }

//     if (beda2 === beda1) {
//         return tentukanDeretAritmatika(arr.slice(1))
//     } else {
//         return false
//     }
// }

// // TEST CASES
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


//----------------------------------------------------------//
function tentukanDeretGeometri(arr) {
    var rasio1 = arr[1] / arr[0]
    var rasio2 = arr[2] / arr[1]
    if (arr.length === 2) {
        return true
    }

    if (rasio2 === rasio1) {
        return tentukanDeretGeometri(arr.slice(1))
    } else {
        return false
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false