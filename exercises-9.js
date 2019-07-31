// ----------------------Function---------------------

//-----------task 1 (shout out)--------------
console.log('---------------task 1 (shout out)----------------')

function shoutOut() {
    console.log('halo function!');
}

shoutOut();

//-----------task 2 (multiply)--------------
console.log('---------------task 2 (multiply)----------------')

//--------------------FUNCTION------------------------
function calculateMultiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

//--------------------PROCESS------------------------
var num1 = 5
var num2 = 6

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

//-------------task 3 (sentence)--------------------
console.log('---------------task 3 (sentence)----------------')

//--------------------FUNCTION------------------------
function processSentence(name, age, address, hobby) {
    var kalimat = 'nama saya ' +
        name + ', umur saya ' +
        age + ', alamat saya di ' +
        address + ', dan saya punya hobi yaitu ' +
        hobby;
    return kalimat;
}

//--------------------PROCESS------------------------
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);