//[Exercises 13] Toko X

function countProfit(shoppers) {
    var result = []

    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    //isi result default
    for (var i = 0; i < listBarang.length; i++) {
        var resultObj = {
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0
        }
        result.push(resultObj)
    }

    for (var i = 0; i < shoppers.length; i++) {
        for (var j = 0; j < listBarang.length; j++) {
            //cek apakah produk yang ingin dibeli ada di toko atau tidak
            if (shoppers[i].product === listBarang[j][0]) {
                //cek apakah stok masih ada, jika ada maka update result
                if (result[j].leftOver >= shoppers[i].amount) {
                    result[j].shoppers.push(shoppers[i].name)
                    result[j].leftOver -= shoppers[i].amount
                    result[j].totalProfit += listBarang[j][1] * shoppers[i].amount
                }
            }
        }
    }
    return result
}


// // TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
// [ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

//-----------------------------------------------------------
console.log("------------------------------------")
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

//-----------------------------------------------------------
console.log("------------------------------------")
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// // console.log(countProfit([])); //[]




// let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                      ['Baju Zoro', 500000, 2],
//                      ['Sweater Uniklooh', 175000, 1]
//                    ];

// console.log(listBarang[2][2])
// console.log(listBarang[0].indexOf(10))

// console.log()

// var beli=[{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]

// console.log(beli.length)
// console.log(beli[beli.length-1].amount)


// beli[beli.length-1].amount = 10
// console.log(beli[beli.length-1].amount)