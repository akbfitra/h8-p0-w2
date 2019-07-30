// --------------------------STRING JAVASRIPT---------------------

// --------task 1 (sentence)
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log('--------[string javaScript]----------');
console.log('-------------task 1-----------------');
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

// --------task 2 (index)
var word2 = 'wow JavaScript is so cool';
var firstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
var thirdWord = word2[15] + word2[16];
var fourthWord = word2[18] + word2[19];
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log('-------------task 2-----------------');
console.log('first word: ' + firstWord);
console.log('second word: ' + secondWord);
console.log('third word: ' + thirdWord);
console.log('fourth word: ' + fourthWord);
console.log('fifth word: ' + fifthWord);

// --------task 3 (substring)
// var word2 = 'wow JavaScript is so cool';
var firstWord3 = word2.substring(0, 3);
var secondWord3 = word2.substring(4, 14);
var thirdWord3 = word2.substring(15, 17);
var fourthWord3 = word2.substring(18, 20);
var fifthWord3 = word2.substring(21, 25);

console.log('-------------task 3-----------------');
console.log('first word3: ' + firstWord3);
console.log('second word3: ' + secondWord3);
console.log('third word3: ' + thirdWord3);
console.log('fourth word3: ' + fourthWord3);
console.log('fifth word3: ' + fifthWord3);

// --------task 4 (count each)
// var word2 = 'wow JavaScript is so cool';
var firstWordLength = firstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('-------------task 4-----------------');
console.log('first word3: ' + firstWord3 + ' ' + 'word length: ' + firstWordLength);
console.log('second word3: ' + secondWord3 + ' ' + 'word length: ' + secondWordLength);
console.log('third word3: ' + thirdWord3 + ' ' + 'word length: ' + thirdWordLength);
console.log('fourth word3: ' + fourthWord3 + ' ' + 'word length: ' + fourthWordLength);
console.log('fifth word3: ' + fifthWord3 + ' ' + 'word length: ' + fifthWordLength);