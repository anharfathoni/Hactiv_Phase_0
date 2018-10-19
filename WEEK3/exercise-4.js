// [Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

function dataHandling2(inp) {
    //menghapus dan menambah array dengan splice
    inp.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    inp.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(inp)

    //memisahkan tanggal bulan tahun dengan separator "/"
    var pisah = inp[3].split("/")
    switch (pisah[1]) {
        case "01":
            console.log("Januari")
            break
        case "02":
            console.log("Februari")
            break
        case "03":
            console.log("Maret")
            break
        case "04":
            console.log("April")
            break
        case "05":
            console.log("Mei")
            break
        case "06":
            console.log("Juni")
            break
        case "07":
            console.log("Juli")
            break
        case "08":
            console.log("Agustus")
            break
        case "09":
            console.log("September")
            break
        case "10":
            console.log("Oktober")
            break
        case "11":
            console.log("November")
            break
        case "12":
            console.log("Desember")
            break
        default:
            console.log("input tanggal lahir salah")
    }

    var sorting = pisah.sort(function(value1, value2) { return value2 - value1 })
    console.log(sorting)

    var gabung = inp[3].split("/").join("-")
    console.log(gabung)

    var slice = inp[1].slice(0, 15)
    console.log(slice)


}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */