function calc(stringData) {
    var result
    var angka1 = ""
    var angka2 = ""

    for (var i = 0; i < stringData.length; i++) {
        // console.log(calc("102*2")); // 204
        if (stringData[i] === "+" || stringData[i] === "-" || stringData[i] === "*" || stringData[i] === ":" || stringData[i] === "%") {
            var proses = stringData[i]
        } else if (!proses) {
            console.log("apa ini? ", !proses)
            angka1 += stringData[i]
        } else {
            console.log("apa ini 2 ? ", !proses)
            angka2 += stringData[i]
        }
    }
    // console.log("angka1:", angka1)
    // console.log("angka2:", angka2)
    switch (proses) {
        case "+":
            result = Number(angka1) + Number(angka2)
            break

        case "-":
            result = Number(angka1) - Number(angka2)
            break

        case "*":
            result = Number(angka1) * Number(angka2)
            break

        case "%":
            result = Number(angka1) % Number(angka2)
            break

        case ":":
            result = Number(angka1) / Number(angka2)
            break
    }
    return result
}

//Test case
console.log(calc("102*2")); // 204
console.log(calc("2+3")); // 5
console.log(calc("100:25")); // 4
console.log(calc("10%2")); // 0
console.log(calc("99-2")); // 97