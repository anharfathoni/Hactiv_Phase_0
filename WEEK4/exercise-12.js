//[Exercises 12] Shopping Time!

function shoppingTime(memberId, money) {
    function buy(uang) {
        var item = []
        var result = []

        var objItem = [
            ["Sepatu Stacattu", 1500000],
            ["Baju Zoro", 500000],
            ["Baju H&N", 250000],
            ["Sweater Uniklooh", 175000],
            ["Casing Handphone", 50000]
        ]

        for (var i = 0; i < 5; i++) {
            if (uang >= objItem[i][1]) {
                item.push(objItem[i][0])
                uang -= objItem[i][1]
            }
        }
        result.push(item)
        result.push(uang)
        return result
    }


    if (memberId === "" || memberId == null) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    } else {
        var item_n_change = buy(money)
        var data = {
            memberId: memberId,
            money: money,
            listPurchased: item_n_change[0],
            changeMoney: item_n_change[1]
        }
    }
    return data
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja