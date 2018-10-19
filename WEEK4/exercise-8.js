//[Exercises 8] Urutkan Abjad

function urutkanAbjad(str) {
    var strArr = []
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        strArr.push(str[i])

    }
    strArr.sort(function(a, b) { return a > b })

    for (var i = 0; i < str.length; i++) {
        newStr += strArr[i]
    }

    return newStr
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'