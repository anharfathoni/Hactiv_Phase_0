function cariPelaku(str) {
    var jumlahABC = str.match(/abc/g)
        // console.log(jumlahABC)
    return jumlahABC.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2