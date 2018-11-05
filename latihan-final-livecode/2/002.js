/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

*/

function virusCheck(str, viruses) {
    if (str === undefined || viruses === undefined) {
        return "No viruses detected"
    }
    var virus = viruses.split("|")
        // console.log(virus)
    var count = 0

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < virus.length; j++) {
            if (str[i].toLowerCase() === virus[j].toLowerCase())
                count++
        }
    }
    if (count > 0) {
        return count + " viruses detected"
    } else {
        return "No viruses detected"
    }
}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 4 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected