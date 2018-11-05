/*
================
Angka Ganjil Terbesar
================

[INSTRUCTIONS]

angkaTerganjil adalah sebuah function yang menerima satu parameter berupa array of number.
function akan mereturn sebuah angka ganjil terbesar dalam array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka 0

[RULE]
- WAJIB MENYERTAKAN algoritma / pseudocode
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan Math.max, Math.min, .sort
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
angkaTerganjil([1,2,3,4,5,6,7])

output: 7


*/
/*ALGORITMA
  1. buat variable tampung berupa variable ganjil.
  2. lakukan pengulangan data pada data array.length.
  3. buat suatu kondisi, jika data array pertama modulus 2 hasilnya sama dengan 1, data array kedua modulus 2 hasilnya sama dengan 1
     dan seterusnya sampai panjang data array. 
  4. maka hasil perhitungan di nomor 3, akan di masukan kedalam variable tampung ( ganjil ).
  5. lalu buat variable bantu berupa ganjilMax, dengan isi variable tersebut, merupakan data pertama dari variable ganjil
     yang dimana isi dari variable ganjil merupakan hasil dari nomor 3.
  6. buat suatu kondisi, jika variable bantu lebih kecil dari semua nilai di dalam variable ganjil
     maka data - data tersebut akan masuk di dalam variable bantu ( ganjilMax)
  7. return hasil dari ganjilMax
*/
function angkaTerganjil(array) {

}

console.log(angkaTerganjil([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
console.log(angkaTerganjil([7, 6, 5, 3, 1, 10])); // 7
console.log(angkaTerganjil([3, 3, 3, 5, 3])); // 5
console.log(angkaTerganjil([2, 4, 6, 8])); // 0
console.log(angkaTerganjil([1, 1, 3, 3, 5, 5, 7, 11, 11, 9, 9])); // 11