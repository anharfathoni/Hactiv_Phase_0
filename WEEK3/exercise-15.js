//[Exercises 15] Mengelompokkan Hewan
//NOTE: Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
    animals.sort()
        //console.log("panjang array "+animals.length + " : "+animals)
    var groupArr = []
    var temporary = []
    for (var i = 0; i < animals.length - 1; i++) {

        var huruf1 = animals[i].slice(0, 1)
        var huruf2 = animals[i + 1].slice(0, 1)

        if (huruf1 === huruf2) {
            temporary.push(animals[i])
            if (i === (animals.length - 2)) {
                temporary.push(animals[i + 1])
                groupArr.push(temporary)
            }
        } else {
            temporary.push(animals[i])
            groupArr.push(temporary)
            var temporary = []
            if (i === (animals.length - 2)) {
                temporary.push(animals[i + 1])
                groupArr.push(temporary)
            }
            //console.log("group Array: ",groupArr)
            //console.log()
        }

    }
    return (groupArr)
}

// TEST CASES
//NOTE: Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log()
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]