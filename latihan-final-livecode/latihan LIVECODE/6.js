// /*
// =============
// UNIQUE FINDER
// =============
// Name :_____________

// [INSTRUCTIONS]
// uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
// Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
// Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
// Sehingga, Hello dan HELLO di anggap kata yang sama.
// Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
// [CONSTRAINTS]
// Tidak ada batasan untuk soal ini.
// [EXAMPLE]
// uniqueFinder('saya dan SAYA suka makan nasi')
// kata unik: saya, dan, suka, makan, nasi
// output: ['saya', 'dan', 'suka', 'makan', 'nasi']


// [RULE]
// - Dilarang menggunakan Regex (.match, .test, dan sebagainya)
// - Dilarang menggunakan .map, .filter, dan .reduce!
// - Dilarang menggunakan .split, indexOf!

// */

function uniqueFinder(sentence) {
    var sentence2 = sentence.toLowerCase()
    var arrSentence2 = []
    var temp = ""
    var result = []

    for (var i = 0; i < sentence2.length; i++) {
        var check = true

        if (sentence2[i] !== " ") {
            temp += sentence2[i]
        } else {
            arrSentence2.push(temp)
            temp = ""
        }
    }
    arrSentence2.push(temp)

    for (var i = arrSentence2.length - 1; i >= 0; i--) {
        var checksama = false
            //cek ada yang sama atau tidak
        for (var j = i - 1; j >= 0; j--) {
            if (arrSentence2[i] === arrSentence2[j]) {
                checksama = true
            }
        }
        if (checksama === false) { //jika tidak ada yang sama
            result.unshift(arrSentence2[i])
        }
    }

    if (sentence.length === 0) {
        return "NO WORD"
    } else {
        return result
    }
}

// function uniqueFinder(sentence) {
//     if (!sentence) {
//         return 'NO WORDS'
//     }

//     var result = [];
//     var kata = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== ' ') {
//             kata += sentence[i];
//         } else {
//             result.push(kata)
//             kata = '';
//         }
//     }
//     result.push(kata)
//     for (let i = 0; i < result.length; i++) {
//         for (let j = i + 1; j < result.length; j++) {
//             var cek1 = result[i].toLowerCase();
//             var cek2 = result[j].toLowerCase();
//             if (cek1 === cek2) {
//                 result.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return result;
// }

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'