//[Exercises 10] Cek AB

function checkAB(num) {
    var checkA = []
    var checkB = []
    var checkLength = []
    var checkLengthAB = false

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            checkA.push(i)
        } else if (num[i] === 'b') {
            checkB.push(i)
        }
    }
    // console.log(checkA)
    // console.log(checkB)

    if ((checkA.length === 0) || (checkB.length === 0)) {
        return false
    } else {
        for (var j = 0; j < checkA.length; j++) {
            for (var k = 0; k < checkB.length; k++) {
                checkLength.push(Math.abs(checkA[j] - checkB[k]))
                    //console.log(checkLength)
            }
        }
        for (l = 0; l < checkLength.length; l++) {
            if (checkLength[l] === 4) {
                checkLengthAB = true
            }
        }
        return checkLengthAB
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false