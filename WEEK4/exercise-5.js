//[Exercises 5] Ubah Huruf

function ubahHuruf(kata) {
    var ubah = ""
    for (var i = 0; i < kata.length; i++) {
        ubah += String.fromCharCode(kata.charCodeAt(i) + 1)
    }
    return ubah
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu