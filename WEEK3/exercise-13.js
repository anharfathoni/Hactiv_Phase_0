//[Exercises 13 (Auto)] Target Terdekat

function targetTerdekat(arr) {
    var indexX=[] //buat array untuk mengecek huruf 'x' ada di indeks mana saja
    var indexO=[] //buat array untuk mengecek huruf 'x' ada di indeks mana saja
  
    for(var i=0; i<arr.length; i++){
      if(arr[i]==='x'){
        indexX.push(i)
      }
      else if(arr[i]==='o'){
        indexO.push(i)
      }
    }
  
    //jika tidak ada 'x' terbaca maka return nilai 0
    if(indexX.length===0){
      return 0
    }
    //jika ada 'x' maka lanjutkan proses
    else{
      for(var j=0; j<indexX.length; j++){
        indexX[j] = Math.abs(indexX[j] - indexO[0]) // cari jarak masing2 'x' terhadap 'o'
      }
         
    
      indexX.sort(function(value1, value2) { return value1 - value2 }); //sorting jarak dari paling pendek
  
      return indexX[0] //return jarak paling pendek
    }
    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  //test case tambahan
  console.log(targetTerdekat(['x', ' ', ' ', 'o', ' ', 'x', ' ', 'x'])); // 2