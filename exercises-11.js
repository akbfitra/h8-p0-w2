function balikKata(kata) {
    var length = kata.length
    var gabung = "";
    for (i = 0; i < length; i++) {
        var huruf = kata.substring(i, i + 1);
        gabung = huruf + gabung;
    }
    return gabung;

}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS