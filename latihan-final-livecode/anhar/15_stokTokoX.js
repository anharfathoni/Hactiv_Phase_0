function countProfit(shoppers) {

    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    var objPurchase = []
    for (var i = 0; i < listBarang.length; i++) {
        var objItem = {
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0
        }
        objPurchase.push(objItem)
    }
    // console.log(objPurchase)

    if (shoppers.length === 0) {
        return []
    }

    for (var i = 0; i < shoppers.length; i++) {
        for (var j = 0; j < objPurchase.length; j++) {
            if (shoppers[i].product === objPurchase[j].product) {
                // console.log(shoppers[i].product)
                // console.log(objPurchase[j].product)
                if (shoppers[i].amount <= objPurchase[j].leftOver) {
                    objPurchase[j].shoppers.push(shoppers[i].name)
                    objPurchase[j].leftOver -= shoppers[i].amount
                    objPurchase[j].totalProfit += (shoppers[i].amount * listBarang[j][1])
                }
            }
        }
    }
    // console.log("---------AFTER---------")
    // console.log(objPurchase)
    return objPurchase
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
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
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]