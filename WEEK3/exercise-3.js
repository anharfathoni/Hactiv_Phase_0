//[Exercises 3] Tantangan Array 2 (Melooping menggunakan Array)

//contoh input
var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    //console.log(input[1].length)

function dataHandling(inp) {
    for (var i = 0; i < inp.length; i++) {

        console.log("Nomor ID:  " + inp[i][0])
        console.log("Nama Lengkap:  " + inp[i][1])
        console.log("TTL:  " + inp[i][2] + " " + inp[i][3])
        console.log("Hobi:  " + inp[i][4])
        console.log("")

    }
}

dataHandling(input)