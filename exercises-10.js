function bandingkanAngka(angka1, angka2) {
    var result = angka2 - angka1;
    var hasil;
    if (result > 1) {
        hasil = true;
    } else if (result < 0) {
        hasil = false;
    } else if (result == 0) {
        hasil = -1;
    }
    return hasil;
}
console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));