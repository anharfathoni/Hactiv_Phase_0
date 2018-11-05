function groupAnimals(animals) {
    var result = []
    var arrTemp = []
    for (var i = 0; i < animals.length - 1; i++) {
        var temp = ""
        for (var j = i + 1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }
        }
    }
    // console.log(animals)

    for (var i = 0; i < animals.length - 1; i++) {
        arrTemp.push(animals[i])
        if (animals[i + 1][0] !== arrTemp[0][0]) {
            result.push(arrTemp)
            arrTemp = []
        }
    }
    result.push([animals[animals.length - 1]])
    return (result)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]