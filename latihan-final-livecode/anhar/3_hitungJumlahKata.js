function hitungJumlahKata(kalimat) {
    var kata = []
    for (var i = 0; i < kalimat.length; i++) {
        var temp = ""
        if (kalimat[i] !== " ") {
            temp += kalimat[i]
        } else {
            kata.push(temp)
        }
    }
    kata.push(temp)

    return kata.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5