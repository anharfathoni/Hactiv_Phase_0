/////////////////////////////////////////////////
//EXERCISE 3
var nama = "Anhar"
var peran = "Ksatria"

if (nama.length == 0) {
    console.log("Nama harus diisi!")
} else {
    if (peran.length == 0) {
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
    } else {
        if (peran == "Ksatria") {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Ksatria " + peran + ", kamu dapat menyerang dengan senjatamu!")
        } else if (peran == "Ksatria") {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
        } else {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
        }
    }
}
/////////////////////////////////////////////////
//EXERCISE 4
var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        bulan = " Januari "
        break
    case 2:
        bulan = " Februari "
        break
    case 3:
        bulan = " Maret "
        break
    case 4:
        bulan = " April "
        break
    case 5:
        bulan = " Mei "
        break
    case 6:
        bulan = " Juni "
        break
    case 7:
        bulan = " Juli "
        break
    case 8:
        bulan = " Agustus "
        break
    case 9:
        bulan = " September "
        break
    case 10:
        bulan = " Oktober "
        break
    case 11:
        bulan = " November "
        break
    case 12:
        bulan = " Desember "
        break
}
//console.log(bulan)
console.log(tanggal + bulan + tahun)

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 5A
var word = 'JavaScript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it!';

console.log(word + second + third + fourth + fifth + sixth + seventh)

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 5B
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[15] + word[16]; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord = word[21] + word[22] + word[23] + word[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

/*
Output
First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
*/
//////////////////////////////////////////////////////////////////////////////
//EXERCISE 5C
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 20); // do your own!
var fifthWord3 = word3.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
//////////////////////////////////////////////////////////////////////////////
//EXERCISE 5D
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

/*
Output
First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4
*/

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 6A
var n = 2
console.log("LOOPING PERTAMA")
while (n <= 20) {
    console.log(n + " - I love coding")
    n += 2
}

console.log("LOOPING KEDUA")
while (n >= 2) {
    console.log(n + " - I will become fullstack developer")
    n -= 2
}

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 6B
console.log("LOOPING PERTAMA")
for (var i = 1; i <= 20; i++) {
    console.log(i + " - I love coding")
}
console.log("LOOPING KEDUA")
for (var i = 20; i >= 1; i--) {
    console.log(i + " - I will become fullstack developer")
}
//////////////////////////////////////////////////////////////////////////////
//EXERCISE 6C
console.log("contoh ganjil-genap")
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

console.log("counter tambah 2")
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log('"3 KELIPATAN 3"')
    } else {
        console.log("")
    }
}

console.log("counter tambah 5")
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log('"6 KELIPATAN 6"')
    } else {
        console.log("")
    }
}

console.log("counter tambah 9")
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log('"10 KELIPATAN 10"')
    } else {
        console.log("")
    }
}

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 7A

var row = prompt("masukkan jumlah baris")

for (var baris = 0; baris < row; baris++) {
    console.log("*")
}

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 7B
var row;
var jumlah = "";
row = prompt("masukkan jumlah baris");

for (var baris = 0; baris < row; baris++) {
    for (var bintang = 0; bintang <= row; bintang++) {
        jumlah += "*"
    }
    console.log(jumlah)
    jumlah = "";
}
//////////////////////////////////////////////////////////////////////////////
//EXERCISE 7C
var row;
var jumlah = "";
row = prompt("masukkan jumlah baris");

for (var baris = 0; baris < row; baris++) {
    for (var bintang = 0; bintang <= baris; bintang++) {
        jumlah += "*"
    }
    console.log(jumlah)
    jumlah = "";
}
//////////////////////////////////////////////////////////////////////////////
//EXERXISE 9A
function shoutOut() {
    return ("Halo Function")
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 9B
function calculateMultiply(a, b) {
    var c = a * b
    return c
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 9C
function processSentence(a, b, c, d) {
    var full = "Nama saya " + a + ", umur saya " + b + " tahun, alamat saya di " + c + ", dan saya punya hobby yaitu " + d + "!"
    return full
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 10

function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    if (angka1 < angka2) {
        return true
    } else if (angka1 === angka2) {
        return -1
    } else {
        return false
    }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//////////////////////////////////////////////////////////////////////////////
//EXERCISE 11
var kata

function balikKata(kata) {
    var balik = ""
    var huruf = kata.length

    for (var i = huruf; i > 0; i--) {
        balik += kata[i - 1]
    }

    return balik;
}

console.log(balikKata("abcde"))
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


//////////////////////////////////////////////////////////////////////////////
//EXERCISE 12
function konversiMenit(menit) {
    // you can only write your code here!
    var hour
    var minute
        //var minutefix="0"

    if (menit > 60) {
        hour = Math.floor(menit / 60)
        minute = menit - (hour * 60)
    } else {
        hour = 0
        minute = menit
    }

    if (minute < 10) {
        minute = "0" + minute
    }

    return (hour + ":" + minute)
}

var a = prompt("masukkan menit")
console.log(konversiMenit(a))
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


//////////////////////////////////////////////////////////////////////////////
//EXERCISE 13
var kata = prompt("masukkan kata")
xo(kata)

function xo(str) {
    countx = 0
    counto = 0
    var huruf = str.length
    console.log(huruf)

    for (var i = 0; i < huruf; i++) {
        if (str[i] === 'x') {
            countx += 1
        } else if (str[i] === 'o') {
            counto += 1
        }
    }
    console.log(countx)
    console.log(counto)
    return (countx == counto)
}

