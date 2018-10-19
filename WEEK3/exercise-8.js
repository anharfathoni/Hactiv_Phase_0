// [Exercises 8 (Auto)] Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    var strNum = String(num) //input angka dibuat menjadi string agar lebih mudah untuk diolah
    var arr = []
    for (var i = 0; i < strNum.length - 1; i++) {
        arr.push(strNum.slice(i, i + 2)) //mengambil 2 karakter dari string lalu di push ke array
        arr.sort(function(value1, value2) { return value2 - value1 }) //dilakukan sorting descending(besar ke kecil)
    }
    return (Number(arr[0])) //return nilai paling besar
}

// // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99