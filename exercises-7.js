// ----------------------BINTANG JAVASCRIPT---------------------

//-----------task 1 (baris bintang)--------------
console.log('---------------task 1 (baris bintang)----------------')
var rows1 = 5;

for (var i = 0; i < rows1; i++) {
    console.log('*')
}

//-----------task 2 (nested loop)--------------
console.log('---------------task 2 (nested loop)----------------')
var rows2 = 5;
for (var i = 0; i < rows2; i++) {
    var bintang = ''
    for (var j = 0; j < rows2; j++) {
        bintang += '*'
    }
    console.log(bintang)
}
//-----------task 3 (piramid bintang)--------------
console.log('---------------task 2 (piramid bintang)----------------')
var rows3 = 5;
for (var i = 0; i < rows3; i++) {
    var bintang2 = ''
    for (var j = 0; j <= i; j++) {
        bintang2 += '*'
    }
    console.log(bintang2)
}