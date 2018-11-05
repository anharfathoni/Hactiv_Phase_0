/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary(data) {

    //Mencari negara mana saja yang ikut serta
    if (data.length === 0) {
        return "No Participant"
    }
    var nation = []
    for (var i = 0; i < data.length - 1; i++) {
        var isUniqNation = true
        for (var j = i + 1; j < data.length; j++) {
            if (data[i][1] === data[j][1]) {
                isUniqNation = false
            }
        }
        if (isUniqNation === true) {
            nation.push(data[i][1])
        }
    }
    nation.push(data[data.length - 1][1])
        // console.log(nation)

    //Buat default objek participant nya
    var objParticipant = {}

    for (var i = 0; i < nation.length; i++) {
        objParticipant[nation[i]] = {
            total: 0,
            names: []
        }
    }
    // console.log("default:")
    // console.log(objParticipant)

    //Update Objek Participant
    for (var i = 0; i < nation.length; i++) {
        for (var j = 0; j < data.length; j++) {
            if (nation[i] === data[j][1]) {
                objParticipant[nation[i]].total += 1
                objParticipant[nation[i]].names.push(data[j][0])
            }
        }
    }
    // console.log("after:")
    // console.log(objParticipant)
    return objParticipant

}

// Test cases
console.log(participantsSummary([
    ['Dimitri', 'Russia'],
    ['Heihachi', 'Japan'],
    ['Sergei', 'Russia'],
    ['Kazuya', 'Japan'],
    ['Hwoarang', 'South Korea'],
    ['Jin', 'Japan']
]));
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

// console.log(participantsSummary([
//     ['Suzuka', 'Japan'],
//     ['Steve', 'United Kingdom'],
//     ['Paul', 'USA']
// ]));
// /*
// {
//   Japan: {
//     total: 1,
//     names: [ 'Suzuka' ]
//   },
//   'United Kingdom': {
//     total: 1,
//     names: [ 'Steve' ]
//   },
//   USA: {
//     total: 1,
//     names: [ 'Paul' ]
//   }
// }
// */

// console.log(participantsSummary([]));
// // No participants