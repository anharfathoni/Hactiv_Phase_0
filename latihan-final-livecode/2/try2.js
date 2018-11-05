function lulus(data) {
    var result = []
    var kelas = []
    var mean = 0 //mean dari semua siswa di sekolah
    var result = []

    for (var i = data.length - 1; i >= 0; i--) {
        kelasUniq = true
        for (var j = i - 1; j >= 0; j--) {
            if (data[i].class === data[j].class) {
                kelasUniq = false
            }
        }

        if (kelasUniq === true) {
            kelas.unshift(data[i].class)
        }
    }
    // console.log(kelas)

    for (var i = 0; i < data.length; i++) {
        mean += data[i].score
    }
    mean /= data.length //mean dari semua siswa di sekolah
        // console.log(mean) 

    for (var i = 0; i < kelas.length; i++) {
        objLulusan = {
            class: kelas[i],
            pass: [],
            failed: [],
            average: mean
        }
        result.push(objLulusan)
    }
    // console.log(result)

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (data[i].class === result[j].class) {
                if (data[i].score > mean) {
                    result[j].pass.push(data[i].name)
                } else {
                    result[j].failed.push(data[i].name)
                }
            }
        }
    }
    return (result)


}

console.log(lulus([{
        name: 'Januar',
        score: 70,
        class: 'A'
    },
    {
        name: 'Fauzan',
        score: 80,
        class: 'A'
    },
    {
        name: 'Maitreya',
        score: 65,
        class: 'B'
    },
    {
        name: 'Lawrance',
        score: 65,
        class: 'B'
    },
    {
        name: 'ABC',
        score: 71,
        class: 'B'
    }

]));
/*
[{class: 'A'
    pass: [fauzan]
    failed: [januar]
    average: 75
    },
    {class:'C'
    pass: ...
    failed: ...
    average: 65
    }
]
*/