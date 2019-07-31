function konversiMenit(menit) {
    var sisaMenit = menit % 60;
    var sisaMenitString = sisaMenit.toString();
    var jam = (menit - sisaMenit) / 60;
    if (sisaMenitString.length == 1) {
        sisaMenitString = '0' + sisaMenitString;
    }
    var output = jam + ':' + sisaMenitString;
    return output;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));