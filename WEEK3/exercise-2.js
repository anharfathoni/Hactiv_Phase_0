//[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)
/*Directions
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
input "hello world!"
output "!dlrow olleh"
*/

var kata = "hello world!"
var reverse = ""
for (var i = kata.length - 1; i >= 0; i--) {
    reverse += kata[i]
}
console.log(reverse)