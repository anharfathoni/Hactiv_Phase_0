/*
  ODD EVEN WORDS
  ==================

  function oddEventWord adalah sebuah function yang menerima 1 parameter berupa string kalimat.
  function ini akan mengubah setiap kata dalam kalimat tersebut menjadi odd atau even
  - jika jumlah karakter dalam kata tersebut adalah ganjil maka dirubah menjadi odd
  - jika jumlah karakter dalam kata tersebut adalah genap maka dirubah menjadi even


  example:
  oddEventWord('aku programmer')

  proses:
  terdiri dari dua kata aku, dan programmer
  kata aku terdiri dari tiga karakter a, k dan u sehingga dirubah menjadi odd
  kata programmer terdiri dari sepuluh karakter p, r, o, g, r, a, m, m, e, dan r sehingga dirubah menjado even


  output: odd even

  RULES:
  - WAJIB disertai dengan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .indexOf()

*/

/*
PSEUDOCODE
FUNCTION "oddEventWord" with parameter -"kalimat" typedata "string"
BEGIN
  STORE "result" with null string value
  STORE "arrKalimat" with null array
  STORE "temp" with null string

  IF(kalimat.length === 0)
    return "invalid input"
  END IF

  FOR( i= 0 to i<kalimat.length)
    IF(kalimat[i] !== " ")   //bukan spasi
      temp = temp + kalimat[i]
    ELSE  //jika ketemu spasi
      IF(temp % 2 === 0) 
        result = result + "even"
      ELSE IF(temp % 2 !== 0)
        result = result + "odd"
      END IF
      result += " " //tambah spasi
      temp = "" //nilai "temp" kembali kosong
    END IF
  END FOR

  //cek kata terakhir
  IF(temp % 2 === 0) 
    result = result + "even"
  ELSE IF(temp % 2 !== 0)
    result = result + "odd"
  END IF

  return "result"
END FUNTION


*/
function oddEventWord(kalimat) {
    var result = ""
    var arrKalimat = []
    var temp = ""

    if (kalimat.length === 0) {
        return "invalid input"
    }
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== " ") {
            temp += kalimat[i]
        } else {
            if (temp.length % 2 === 0) {
                result += "even"
            } else {
                result += "odd"
            }
            result += " "
            temp = ""
        }
    }
    if (temp.length % 2 === 0) {
        result += "even"
    } else {
        result += "odd"
    }
    return result
}


console.log(oddEventWord('baca buku')) // even even
console.log(oddEventWord('rajin belajar')) // odd odd
console.log(oddEventWord('aku suka javascript')) // odd even even
console.log(oddEventWord('ikan')) // even
console.log(oddEventWord('')) // invalid input