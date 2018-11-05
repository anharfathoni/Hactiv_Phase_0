/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!

*/
/* ALGORITMA
1. Membuat var huruf dengan isi a-z
2. membuat var h8bi dengan isi logo untuk menggantikan huruf dari input
3. membuat var hasil dengan nilai string kosong
4. membuat loop untuk mengecek huruf dari input
5. membuat nested loop untuk menyamakan no index input dengan huruf
6. merubah huruf dari input dengan h8bi, lalu memasukan nya ke var hasil
7. jika input tidak ada di huruf, maka masukan input itu sendiri ke var hasil
8. tampilkan var hasil
*/

//CARA DHIMAS(fix)
function encrypt(input) {
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var h8bi = '!@#$%^&*()-+1234567890[]{}';
  var arrKamus = {};
  var hasil = '';
  
  for (let i = 0; i < huruf.length; i++) {
    if(!(huruf[i] in arrKamus)) {
      arrKamus[huruf[i]] = h8bi[i];
    }
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] in arrKamus) {
      hasil += arrKamus[input[i]];
    }
    else {
      hasil += input[i];
    }
  }
  return hasil;
}

// function encrypt(input) {
//   var huruf = 'abcdefghijklmnopqrstuvwxyz';
//   var h8bi = '!@#$%^&*()-+1234567890[]{}';
//   var hasil = '';

//   for (let i = 0; i < input.length; i++) {
//     var test = false;
//     for (var j = 0; j < huruf.length; j++) {
//       if (input[i] === huruf[j]) {
//         test = true;
//         break;
//       }
//     }
//     if (test === true) {
//       hasil += h8bi[j];
//     }
//     else {
//       hasil += input[i];
//     }
//   }
//   return hasil;
// }

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2