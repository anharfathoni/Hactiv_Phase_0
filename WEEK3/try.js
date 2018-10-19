var kata = "javascriptloops"
var arrKata = kata.split("")
var temp = ""
var temp2 = ""
for (var i = 0; i < kata.length; i++) {
    if (kata[i] === 'a' || kata[i] === 'e' || kata[i] === 'i' || kata[i] === 'o' || kata[i] === 'u') {
        temp += kata[i]
    } else {
        temp2 += kata[i]
    }
}
console.log(temp + temp2)

//output
//aaioojvscrptlps