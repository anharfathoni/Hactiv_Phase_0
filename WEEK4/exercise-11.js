//[Exercises 11] Change me

function changeMe(arr) {
    if (arr.length === 0) {
        console.log("")
    }
    for (var i = 0; i < arr.length; i++) {
        var name = ("" + (i + 1) + "." + arr[i][0] + " " + arr[i][1])
        var umur = "" + (2018 - arr[i][3])
        if (umur === 'NaN') {
            umur = 'Invalid Birth Year'
        }
        //console.log(arr[i][3])
        var objArr = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
        }
        console.log(name + " :")
        console.log(objArr)
    }
}


// TEST CASES

var input = [
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]

//changeMe(input);

// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }


changeMe([]); // ""