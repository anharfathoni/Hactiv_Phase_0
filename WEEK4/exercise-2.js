//[Exercises 2] Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    var arr1 = []
    var arr2 = []

    //cari faktor dari masing masing angka dan disimpan ke masing2 array
    for (var i = 1; i <= angka1; i++) {
        if (angka1 % i === 0) {
            arr1.push(i)
        }
    }
    //console.log(arr1)
    for (var i = 1; i <= angka2; i++) {
        if (angka2 % i === 0) {
            arr2.push(i)
        }
    }
    //console.log(arr2)

    // cek nilai pada array1 dan array2 mulai dari belakang, jika sama maka return nilai tersebut
    for (var i = arr1.length - 1; i >= 0; i--) {
        for (var j = arr2.length - 1; j >= 0; j--) {
            if (arr1[i] === arr2[j]) {
                return ((arr1[i]))
            }
        }
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log(fpb(16, 16)); // 16
console.log(fpb(23, 23)); // 23