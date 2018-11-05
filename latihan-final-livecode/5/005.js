/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat genap    
*/

function ganjilGenapAsianGames(date, data) {
    var angka = "0123456789"
    var platMobil = []
    var result = 0

    if (date < 1 || date > 31) {
        return "Invalid date"
    }
    for (var i = 0; i < data.length; i++) {
        var temp = ""
        for (var j = 0; j < data[i].plat.length; j++) {
            for (var k = 0; k < angka.length; k++) {
                // console.log(data[i].plat[j] + " - " + angka[k])
                // console.log("tipe kendaraan: " + data[i].type)
                if (data[i].plat[j] === angka[k] && data[i].type === "Mobil") {
                    temp += data[i].plat[j]
                        // console.log("temp:" + temp)
                }
            }
        }

        if (temp.length > 0) {
            if (date % 2 === 0) {
                if (Number(temp) % 2 !== 0) {
                    result += 1
                }
            } else {
                if (Number(temp) % 2 === 0) {
                    result += 1
                }
            }
        }

    }
    return result
}

console.log(ganjilGenapAsianGames(1, [{
        plat: 'A 2431 HE',
        type: 'Motor'
    }, {
        plat: 'AB 87112 RFS',
        type: 'Motor'
    }, {
        plat: 'Z 999 ERT',
        type: 'Motor'
    }])) // 0

console.log(ganjilGenapAsianGames(30, [{
        plat: 'B 1234 ABC',
        type: 'Mobil'
    }, {
        plat: 'A 2457 HE',
        type: 'Motor'
    }, {
        plat: 'AB 87 RFS',
        type: 'Motor'
    }, {
        plat: 'Z 999 ERT',
        type: 'Mobil'
    }])) // 1

console.log(ganjilGenapAsianGames(26, [{
        plat: 'A 24 HE',
        type: 'Mobil'
    }, {
        plat: 'AB 871 RFS',
        type: 'Mobil'
    }, {
        plat: 'Z 9992 ERT',
        type: 'Mobil'
    }])) // 1

console.log(ganjilGenapAsianGames(1, [{
        plat: 'A 24 WE',
        type: 'Mobil'
    }, {
        plat: 'AB 871 RFS',
        type: 'Mobil'
    }, {
        plat: 'Z 9992 XOXO',
        type: 'Mobil'
    }])) // 2


console.log(ganjilGenapAsianGames(32, [{
        plat: 'X 123 HAHA',
        type: 'Mobil'
    }])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
        plat: 'X 123 HAHA',
        type: 'Mobil'
    }])) // invalid dates