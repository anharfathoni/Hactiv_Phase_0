/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
    var result = []
    var sum = 0
    var kelasA = {
        classCode: 'A',
        passed: [],
        failed: []
    }
    var kelasB = {
        classCode: 'B',
        passed: [],
        failed: []
    }
    var kelasC = {
        classCode: 'C',
        passed: [],
        failed: []
    }

    for (var i = 0; i < studentGrades.length; i++) {
        if (studentGrades[i].score >= 70) {
            if (studentGrades[i].classCode === "A") {
                kelasA.passed.push(studentGrades[i].name)
            } else if (studentGrades[i].classCode === "B") {
                kelasB.passed.push(studentGrades[i].name)
            } else {
                kelasC.passed.push(studentGrades[i].name)
            }
        } else {
            if (studentGrades[i].classCode === "A") {
                kelasA.failed.push(studentGrades[i].name)
            } else if (studentGrades[i].classCode === "B") {
                kelasB.failed.push(studentGrades[i].name)
            } else {
                kelasC.failed.push(studentGrades[i].name)
            }
        }
    }

    result.push(kelasA)
    result.push(kelasB)
    result.push(kelasC)

    return result

}


var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/