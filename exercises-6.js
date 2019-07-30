// ----------------------LOOPING JAVASCRIPT---------------------

//-----------task 1 (while)--------------
console.log('--------------------------task 1 (while)--------------------------')
var jumlah = 0;
console.log('--LOOPING PERTAMA--')
while (jumlah < 20) {
    jumlah += 2;
    console.log(jumlah + ' ' + '- I Love Coding')
}

console.log('--LOOPING KEDUA--')
while (jumlah > 0) {
    console.log(jumlah + ' ' + '- I Will Become Fullstack Developer')
    jumlah -= 2;
}

//-----------task 2--------------
console.log('-----------------------------------task 2 (for)---------------------------------')

var nilaiFor = 1;
console.log('--LOOPING PERTAMA--')
for (nilaiFor; nilaiFor <= 20; nilaiFor++) {
    console.log(nilaiFor + ' ' + '- I Love Coding')
}
console.log('--LOOPING KEDUA--')
for (nilaiFor; nilaiFor > 0; nilaiFor--) {
    console.log(nilaiFor + ' ' + '- I will become fullstack developer')
}

//-----------task 3 (ganjil genap)--------------
console.log('--------------------task 3 (ganjil genap)------------------------------')
var angka = 0;
while (angka < 100) {
    angka++;
    if (angka % 2 == 0) {
        console.log(angka + '' + '-bilangan genap');
    } else {
        console.log(angka + '' + '-bilangan ganjil')
    }
}

console.log('--------------------task 3 (kelipatan 3)------------------------')
var angka3 = 1;
while (angka3 <= 100) {

    if (angka3 % 3 == 0) {
        console.log(angka3 + '' + '-kelipatan 3');
    } else {
        console.log(angka3 + '' + '-')
    }
    angka3 += 2;
}

console.log('-----------------------task 3 (kelipatan 6)----------------------------')
var angka5 = 1;
while (angka5 <= 100) {

    if (angka5 % 6 == 0) {
        console.log(angka5 + '' + '-kelipatan 6');
    } else {
        console.log(angka5 + '' + '-')
    }
    angka5 += 5;
}
console.log('-----------------------task 3 (kelipatan 10)----------------------------')
var angka9 = 1;
while (angka9 <= 100) {

    if (angka9 % 10 == 0) {
        console.log(angka9 + '' + '-kelipatan 10');
    } else {
        console.log(angka9 + '' + '-')
    }
    angka9 += 9;
}