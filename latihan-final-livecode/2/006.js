/**
Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia
Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi JAM, MENIT DAN DETIK).
Contoh:
  formatDuration(62)    // "1 menit 2 detik"
  formatDuration(3665)  //  "1 jam 1 menit 5 detik"
  formatDuration(60) // "1 menit 0 detik"
NOTE: Tidak masalah jika 0 detik ditampilkan.
*/

function recursiveFormatDuration(seconds) {
    if (seconds === 0) {
        return seconds + " detik"
    } else if (seconds / 3600 >= 1) {
        return Math.floor(seconds / 3600) + " jam " + recursiveFormatDuration(seconds % 3600)

        // if (seconds % 3600 === 0) {
        //     return Math.floor(seconds / 3600) + " jam 0 menit 0 detik"
        // } else {
        //     return Math.floor(seconds / 3600) + " jam " + recursiveFormatDuration(seconds % 3600)
        // }
    } else if (seconds / 60 >= 1) {
        // if (seconds % 60 === 0) {
        // return Math.floor(seconds / 60) + " menit 0 detik"
        // } else {
        // return Math.floor(seconds / 60) + " menit " + recursiveFormatDuration(seconds % 60)
        // }
        return Math.floor(seconds / 60) + " menit " + recursiveFormatDuration(seconds % 60)
    } else if (seconds < 60) {
        return Math.floor(seconds) + " detik "
    }

}

console.log(recursiveFormatDuration(3660)); // 1 jam 1 menit 0 detik
console.log(recursiveFormatDuration(62)); // 1 menit 2 detik
console.log(recursiveFormatDuration(7324)); // 2 jam 2 menit 4 detik
console.log(recursiveFormatDuration(0)); // 0 detik