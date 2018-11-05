function changeMe(arr) {
    if (arr.length === 0) {
        console.log("")
    }
    for (var i = 0; i < arr.length; i++) {
        var fullname = (i + 1) + ". " + arr[i][0] + " " + arr[i][1]
        if (arr[i][3] !== undefined) {
            var _age = 2018 - arr[i][3]
        } else {
            var _age = "Invalid Birth Year"
        }
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: _age
        }

        console.log(fullname)
        console.log(obj)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
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