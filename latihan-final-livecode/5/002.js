/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

function sensorSentence(sentence, words) {
    var oneWord = []
    var temp = ""
    var sensor = ""
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            temp += sentence[i]
        } else {
            oneWord.push(temp)
            temp = ""
        }
    }
    oneWord.push(temp)

    // console.log(oneWord)

    var changeWords = ""
    for (var i = 0; i < oneWord.length; i++) {
        if (oneWord[i] === words) {
            for (var j = 0; j < words.length; j++) {
                changeWords += "*"
            }
            // sensor += changeWords
            oneWord[i] = changeWords
        }

        if (i === oneWord.length - 1) {
            sensor += oneWord[i]
        } else {
            sensor += oneWord[i] + " "
        }
    }
    return (sensor)
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''