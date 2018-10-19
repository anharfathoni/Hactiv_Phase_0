//[Exercises 7] Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    var faktor = []
    var temp = ""
    var temp2 = []

    for (i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i)
        }
    }
    //console.log("faktor:",faktor)
    //console.log("panjang faktor: ",faktor.length)
    if (faktor.length % 2 === 0) {
        //console.log(faktor.length/2)
        //console.log((faktor.length/2)-1)
        // temp2.splice(0,0,faktor[(faktor.length/2)-1],faktor[faktor.length/2])
        temp += faktor[(faktor.length / 2) - 1]
        temp += faktor[faktor.length / 2]
    } else {
        //temp2.splice(0,0,faktor[(faktor.length-1)/2])
        temp += faktor[(faktor.length - 1) / 2]
        if (temp.length === 1) {
            return 2
        }
    }
    return temp.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log(digitPerkalianMinimum(81)); // 2
console.log(digitPerkalianMinimum(127)); // 4
console.log(digitPerkalianMinimum(1213)); // 5