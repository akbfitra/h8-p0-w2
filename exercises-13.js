function xo(str) {
    var length = str.length
    var countX = 0;
    var countO = 0;
    var output;
    for (var i = 0; i < length; i++) {
        var cari = str.substring(i, i + 1)
        if (cari == 'x') {
            countX++;
        } else if (cari == 'o') {
            countO++;
        }
    }
    if (countX == countO) {
        output = true;
    } else {
        output = false;
    }
    return output
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));