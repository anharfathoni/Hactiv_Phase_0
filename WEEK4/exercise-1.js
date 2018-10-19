//Exercise 1 - Angka Prima

function angkaPrima(angka) {
    checkPrima = true

    if (angka === 1) {
        return false
            //The definition of a prime number is a positive integer that has exactly two positive divisors. 
            //However, 1 only has one positive divisor (1 itself), so it is not prime.
    }
    if (angka === 2) {
        return true
    } else {
        for (i = 2; i < angka - 1; i++) {
            if (angka % i === 0) {
                checkPrima = false
            }
        }
    }
    return checkPrima
}

// TEST CASES
//Angka yang dicek harus lebih besar sama dengan 2
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

console.log(angkaPrima(1)); // false