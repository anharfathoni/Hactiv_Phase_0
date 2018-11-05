/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga) {

    var ketersediaanUang = [
        { nominal: 100000, jumlah: 5 },
        { nominal: 50000, jumlah: 5 },
        { nominal: 20000, jumlah: 5 },
        { nominal: 10000, jumlah: 5 },
        { nominal: 5000, jumlah: 5 }
    ];

    var kembalian = bayar - harga
    console.log(kembalian)

    var result = { checkUang(kembalian, ketersediaanUang) }

    var kembali = {}

    function checkUang(uang, ketersediaan) {
        for (var i = 0; i < ketersediaan.length; i++) {
            if (kembalian >= ketersediaan[i].nominal) {
                if (ketersediaan[i].jumlah > 0) {
                    kembali[ketersediaan.nominal] = 1 + checkUang(kembalian - ketersediaan[i].nominal, ketersediaan)
                    return kembali[ketersediaan.nominal]
                }
            }
            // else {
            // return 0
            // }
        }
    }

}
// console.log(kembalian)


// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
// console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
// console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
// console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
// console.log(hitungKembalian(50000,500000)); // Uang tidak cukup