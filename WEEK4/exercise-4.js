//[Exercises 4] Cari Modus

function cariModus(arr) {
    var banyakperulangan = 1
    for (var i = 0; i < arr.length - 1; i++) {
        var count = 1
        var modus

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1
            }
        }
        // console.log("array", arr[i])
        // console.log("count", count)

        if (banyakperulangan < count) {
            banyakperulangan = count
            modus = arr[i]
                // console.log("modus ", modus)
        }

        // console.log("perulangan", banyakperulangan)

    }
    if (banyakperulangan === arr.length || banyakperulangan === 1) {
        return -1
    } else {
        return modus
    }
    //return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1